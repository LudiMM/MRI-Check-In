var express = require('express');
var router = express.Router();
import Patient from './patient';

const PatientRouter = express.Router();

async function getAllPatients(id = 1) {
  try {
    const newPatients = await Patient.find();
    console.log(newPatients);
    return newPatients;
  } catch (error) {
    console(error);
  }
}

PatientRouter.route('/create').post(function(req, res) {
  console.log('In patient create route');
  const patient = new Patient(req.body);
  patient
    .save()
    .then(patient => {
      console.log(patient);
      res.json('Patient added successfully');
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('unable to save to the database');
    });
});

PatientRouter.route('/all').get(async function(req, res) {
  console.log('In patient get route');
  const patients = await getAllPatients();
  if (patients) {
    console.log('Patient found in database');
    console.log(patients);
    return res.json(patients);
  }
  return res.status(400).send('unable to save to the database');
});

PatientRouter.route('/delete').get(async function(req, res) {
  console.log('In patient get route');
  Patient.remove({}, function(err) {
    console.log('collection removed');
  });
});

export default PatientRouter;
