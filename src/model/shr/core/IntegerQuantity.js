// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.IntegerQuantity.
 * @extends Quantity
 */
class IntegerQuantity extends Quantity {

  /**
   * Get the Units.
   * @returns {Units} The shr.core.Units
   */
  get units() {
    return this._units;
  }

  /**
   * Set the Units.
   * @param {Units} units - The shr.core.Units
   */
  set units(units) {
    this._units = units;
  }

  /**
   * Set the Units and return 'this' for chaining.
   * @param {Units} units - The shr.core.Units
   * @returns {IntegerQuantity} this.
   */
  withUnits(units) {
    this.units = units; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IntegerQuantity class.
   * The JSON must be valid against the IntegerQuantity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IntegerQuantity} An instance of IntegerQuantity populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'IntegerQuantity');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the IntegerQuantity class to a JSON object.
   * The JSON is expected to be valid against the IntegerQuantity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/IntegerQuantity' } };
    if (this.number != null) {
      inst['Number'] = typeof this.number.toJSON === 'function' ? this.number.toJSON() : this.number;
    }
    if (this.comparator != null) {
      inst['Comparator'] = typeof this.comparator.toJSON === 'function' ? this.comparator.toJSON() : this.comparator;
    }
    if (this.units != null) {
      inst['Units'] = typeof this.units.toJSON === 'function' ? this.units.toJSON() : this.units;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the IntegerQuantity class.
   * The FHIR must be valid against the IntegerQuantity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {IntegerQuantity} An instance of IntegerQuantity populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'IntegerQuantity');
    const inst = new klass();
    if (fhir['value'] != null) {
      inst.number = FHIRHelper.createInstanceFromFHIR('shr.core.Number', fhir['value'], 'decimal', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comparator'] != null) {
      inst.comparator = FHIRHelper.createInstanceFromFHIR('shr.core.Comparator', fhir['comparator'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['unit'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, null, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, null, shrId);
      inst.units.value.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir['unit'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['system'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, null, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, null, shrId);
      inst.units.value.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', fhir['system'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, null, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, null, shrId);
      inst.units.value.codeValue = FHIRHelper.createInstanceFromFHIR('shr.core.CodeValue', fhir['code'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default IntegerQuantity;
