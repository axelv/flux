import MetadataSection from "./MetadataSection";
import _ from 'lodash';

export default class RecentToxicitiesSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Recent Toxicities",
            itemsFunction: this.getItemListForToxicities
        };
    }

    // Returns toxicites in the correct format to be displayed in the summary section
    getItemListForToxicities = (patient, currentConditionEntry) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];

        const toxicities = currentConditionEntry.getMostRecentToxicities();

        return toxicities.map(l => {
            const value = this.getValue(l, patient);
            const name = `${l.type}`;
            return {
                name,
                value,
                shortcut: null
            };
        });
    }

    // Returns the value for the toxicity which includes grade, unsigned, source, and date
    getValue = (tox, patient) => {
        const val = tox.seriousness;
        const unsigned = patient.isUnsigned(tox);
        const source = this.determineSource(patient, tox);
        const when = tox.statementDateTime;
        return {
            source,
            when,
            value: val,
            isUnsigned: unsigned,
        };
    }
}
