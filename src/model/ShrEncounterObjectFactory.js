// TODO do we want to import the autogenerated ./shr/encounter/EncounterRequested when it exists?
import FluxEncounterRequested from './encounter/FluxEncounterRequested';
import Lang from 'lodash';

export default class ShrEncounterObjectFactory {
    static createInstance(elementName, entry) {

        const _elementsToClassNames = { 
                                        "EncounterRequested": FluxEncounterRequested
                                      };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}