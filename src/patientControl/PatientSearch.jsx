import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import SearchSuggestion from './SearchSuggestion.jsx';
import SearchInput from './SearchInput.jsx';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        width: "25vw",
        minWidth: "250px",
        zIndex: 1,
        marginTop: theme.spacing.unit,
        right: 0,
        padding: "8px auto",
    }
});


function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class PatientSearch extends React.Component { 
    constructor(props) { 
        super(props)
        const patient = props.patient;
        const firstName = patient.getName() ? patient.getName().split(' ')[0] : "";
        this.state = {
            firstName: firstName,
        };
    }

    findThisItem = (note) => {
        this.props.setFullAppState('searchSelectedItem', note)
    }

    getSuggestions(inputValue) {
        const notes = this.props.patient.getNotes();

        return notes.reduce((suggestions, note) => {
            //TODO: Fix to search for best options, not just the first five. 
            // If we need more suggestions and there is content in the note
            if (suggestions.length < 5 && note.content && inputValue) {
                //  Establish some common variables for our regex
                const space = '([^\\S\\n])'; 
                const possibleTrigger = '(@|#|\\[\\[|\\]\\]){0,1}'
                const continueToNextWord = '(\\S*[^\\S\\n]\\S*){0,2}';
                const escapedInput = escapeRegExp(inputValue.toLowerCase());
                const strVar = `(${space}${possibleTrigger}${escapedInput}${continueToNextWord}|^${possibleTrigger}${escapedInput}${continueToNextWord})`
                const regex = new RegExp(strVar);
                // Search note content
                const relevantNoteContent = (note.content).toLowerCase();
                const contentMatches = regex.exec(relevantNoteContent);
                // Search note metadata
                const relevantNoteMetadata = (
                    note.date + ' ' + 
                    note.subject + ' ' + 
                    note.clinician + ' ' + 
                    note.hospital
                ).toLowerCase();
                const metadataMatches = regex.exec(relevantNoteMetadata)
                if (contentMatches) { 
                    suggestions.push({
                        date: note.date,
                        subject: note.subject,
                        hospital: note.hospital,
                        contentSnapshot: contentMatches[0].slice(0, 25),
                        note: note,
                    });
                } else if(metadataMatches) { 
                    suggestions.push({
                        date: note.date,
                        subject: note.subject,
                        hospital: note.hospital,
                        contentSnapshot: note.content.slice(0, 25),
                        note: note,
                    });
                }
            }
            return suggestions;
        }, []); 
    }

    render () { 
        const { classes, setFullAppState } = this.props;

        return (
            <div className={classes.root}>
                <Downshift
                    defaultHighlightedIndex={0}
                >
                    {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => {
                        return (
                            <div className={classes.container}>
                                <SearchInput
                                    fullWidth={true}
                                    classes={classes}
                                    InputProps={getInputProps({
                                        placeholder: `Search ${this.state.firstName}'s notes`,
                                        id: 'integration-downshift-simple',
                                        onKeyDown: (event) => {
                                            if (event.key === 'Enter' && this.getSuggestions(inputValue)[highlightedIndex]) {
                                                const selectedElement = this.getSuggestions(inputValue)[highlightedIndex];
                                                this.findThisItem(selectedElement.note);
                                            }
                                        },
                                    })}
                                />
                                {isOpen 
                                    ? (
                                        <Paper className={classes.paper} square>
                                            {this.getSuggestions(inputValue).map((suggestion, index) => { 
                                                return (
                                                    <SearchSuggestion
                                                        suggestion={suggestion}
                                                        key={suggestion.date + suggestion.subject}
                                                        index={index}
                                                        itemProps={getItemProps({ item: suggestion.contentSnapshot })}
                                                        highlightedIndex={highlightedIndex}
                                                        selectedItem={selectedItem}
                                                        setFullAppState={setFullAppState}
                                                    />
                                                );
                                            })}
                                            
                                        </Paper>
                                    ) 
                                    : null
                                }
                            </div>
                        );
                    }}
                </Downshift>
            </div>
        );
    }
}

PatientSearch.propTypes = {
    classes: PropTypes.object.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientSearch);
