const express = require('express');
const router = express.Router();

const Traveler = require('../models/Traveler');

/* 

Gezginin son koordinatlarının tutuldugu bu endpointlerde summary.js ile aynı yolu izlememe rağmen
düzgün çalıştıramadım. Sanırım göremediğim veya bilmediğin bir nokta var.

Aşağıdaki link ile çalıştırabilirsiniz.

http://localhost:3000/api/v1/traveler/route/5d223e4ee7179a4e432ebc91

*/

router.get('/', (req, res) => {
  const promise = Traveler.find({ });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.get('/:TRAVELER_ID', (req, res) => {
  const promise = Traveler.findById(req.params.TRAVELER_ID);

  promise.then((data) => {
    res.json(...data.coordinate);
  }).catch((err) => {
    res.json(err);
  })
});

module.exports = router;
