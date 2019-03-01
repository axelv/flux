import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

/**
 * Generated class for oncocore.RadiationFractionsDelivered.
 */
class RadiationFractionsDelivered {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   * @returns {RadiationFractionsDelivered} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the Quantity and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   * @returns {RadiationFractionsDelivered} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RadiationFractionsDelivered class.
   * The JSON must be valid against the RadiationFractionsDelivered JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RadiationFractionsDelivered} An instance of RadiationFractionsDelivered populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RadiationFractionsDelivered();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RadiationFractionsDelivered class to a JSON object.
   * The JSON is expected to be valid against the RadiationFractionsDelivered JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/oncocore/RadiationFractionsDelivered' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RadiationFractionsDelivered class.
   * The FHIR must be valid against the RadiationFractionsDelivered FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RadiationFractionsDelivered} An instance of RadiationFractionsDelivered populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new RadiationFractionsDelivered();
    if (asExtension) {
      inst.value = fhir['valueQuantity'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Quantity', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default RadiationFractionsDelivered;
