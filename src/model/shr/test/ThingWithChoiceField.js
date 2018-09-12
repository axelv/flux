import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.ThingWithChoiceField.
 */
class ThingWithChoiceField {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {ThingWithChoiceField} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ChoiceOfDatishThings.
   * @returns {ChoiceOfDatishThings} The shr.test.ChoiceOfDatishThings
   */
  get choiceOfDatishThings() {
    return this._choiceOfDatishThings;
  }

  /**
   * Set the ChoiceOfDatishThings.
   * This field/value is required.
   * @param {ChoiceOfDatishThings} choiceOfDatishThings - The shr.test.ChoiceOfDatishThings
   */
  set choiceOfDatishThings(choiceOfDatishThings) {
    this._choiceOfDatishThings = choiceOfDatishThings;
  }

  /**
   * Set the ChoiceOfDatishThings and return 'this' for chaining.
   * This field/value is required.
   * @param {ChoiceOfDatishThings} choiceOfDatishThings - The shr.test.ChoiceOfDatishThings
   * @returns {ThingWithChoiceField} this.
   */
  withChoiceOfDatishThings(choiceOfDatishThings) {
    this.choiceOfDatishThings = choiceOfDatishThings; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ThingWithChoiceField class.
   * The JSON must be valid against the ThingWithChoiceField JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ThingWithChoiceField} An instance of ThingWithChoiceField populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ThingWithChoiceField();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ThingWithChoiceField class to a JSON object.
   * The JSON is expected to be valid against the ThingWithChoiceField JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/ThingWithChoiceField' };
    if (this.choiceOfDatishThings != null) {
      inst['ChoiceOfDatishThings'] = typeof this.choiceOfDatishThings.toJSON === 'function' ? this.choiceOfDatishThings.toJSON() : this.choiceOfDatishThings;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ThingWithChoiceField class to a FHIR object.
   * The FHIR is expected to be valid against the ThingWithChoiceField FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.choiceOfDatishThings != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.choiceOfDatishThings.toFHIR(true));
    }
    return inst;
  }
}
export default ThingWithChoiceField;
