import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.medication.AdditionalDosageInstruction.
 */
class AdditionalDosageInstruction {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {AdditionalDosageInstruction} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {AdditionalDosageInstruction} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdditionalDosageInstruction class.
   * The JSON must be valid against the AdditionalDosageInstruction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdditionalDosageInstruction} An instance of AdditionalDosageInstruction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdditionalDosageInstruction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AdditionalDosageInstruction class to a JSON object.
   * The JSON is expected to be valid against the AdditionalDosageInstruction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/AdditionalDosageInstruction' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AdditionalDosageInstruction class.
   * The FHIR must be valid against the AdditionalDosageInstruction FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AdditionalDosageInstruction} An instance of AdditionalDosageInstruction populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AdditionalDosageInstruction();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default AdditionalDosageInstruction;
