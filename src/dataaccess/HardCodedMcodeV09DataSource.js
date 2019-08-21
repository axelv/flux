import IDataSource from './IDataSource';
import BreastMainTreatmentDiabetesHypertensionJaneV09_01 from './BreastMainTreatmentDiabetesHypertensionJaneV09.json';
import BreastMainTreatmentDiabetesHypertensionJaneV09_02 from './BreastMainTreatmentDiabetesHypertensionJaneV09_02.json';
import BreastMainTreatmentDiabetesHypertensionJaneV09_03 from './BreastMainTreatmentDiabetesHypertensionJaneV09_03.json';
import PatientRecord from '../patient/PatientRecord.jsx';
import  * as McodeV05EntryMapper from './McodeV05EntryMapper';

class HardCodedMcodeV09DataSource extends IDataSource {
    constructor() {
        super();
        this._gestalt = {
            create: {
                async: false,
                sync: false
            },
            read: {
                async: false,
                sync: true
            },
            update: {
                async: false,
                sync: false
            },
            delete: {
                async: false,
                sync: false
            }
        };
    }

    getGestalt() {
        return this._gestalt;
    }

    getPatient(id) {
        let patientJSON;

        if (BreastMainTreatmentDiabetesHypertensionJaneV09_01[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV09_01;
        } else  if (BreastMainTreatmentDiabetesHypertensionJaneV09_02[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV09_02;
        }  else  if (BreastMainTreatmentDiabetesHypertensionJaneV09_03[0].ShrId.Value === id) {
            patientJSON = BreastMainTreatmentDiabetesHypertensionJaneV09_03;
        } 
        else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in hard-coded read only data source.");
        }
        return new PatientRecord(McodeV05EntryMapper.mapEntries(patientJSON));
    }

    getListOfPatients() {
        const patients = [ BreastMainTreatmentDiabetesHypertensionJaneV09_01, BreastMainTreatmentDiabetesHypertensionJaneV09_02, BreastMainTreatmentDiabetesHypertensionJaneV09_03 ];
        return patients.map(p => new PatientRecord(p));
    }

    newPatient() {
        console.log("creating new patients is not implemented in hard-coded read only patient data source.");
    }

    savePatient(patient) {
        console.log("saving of patients is not implemented in hard-coded read only patient data source. Updated Patient record ", patient);
    }
}

export default HardCodedMcodeV09DataSource;
