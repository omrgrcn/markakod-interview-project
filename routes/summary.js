const express = require('express');
const router = express.Router();

const Routes = require('../models/Routes');

/* 

Gezginin tüm koordinatlarını TRAVELER_ID parametresi ile listeleme routeleri düzgün çalışmaktadır.
Aşağıdaki link ile deneyebilirsiniz.

http://localhost:3000/api/v1/summary/5d223e4ee7179a4e432ebc91

*/

router.get('/', (req, res) => {
  const promise = Routes.find({ });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.get('/:TRAVELER_ID', (req, res) => {
  const promise = Routes.findById(req.params.TRAVELER_ID);

  promise.then((data) => {
    res.json(...data.locations);
  }).catch((err) => {
    res.json(err);
  })
});

module.exports = router;
