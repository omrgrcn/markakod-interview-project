const express = require('express');
const router = express.Router();

const Coordinate = require('../models/Routes');

/* 

root sayfasındaki post methodu için aslında yapmak istedigim daha farklıydı.
Bence bu işlem put methoduyla yapılmalıydı çünkü bir gezginin bir koordinat array'i
olacak şekilde yapılması daha doğru olacaktır. Koordinat array'ine sürekli push yapılmalıydı.
Şuanda her koordinat kaydı için bir document oluşturarak kayıt yapılıyor. Benim bilgim
dahilinde post methoduyla ancak bu yapılabilir.

Son olarak çalıştığım raw datalar aşağıdaki gibidir.

{
    "travelerId" : "5d223e4ee7179a4e432ebc91",
    "locations" : [ 
        {
            "lat" : 50.3292231,
            "lng" : 6.9322001
        }
    ]
}

 */

router.post('/', (req,res,next) => {
  const coordinate = new Coordinate(req.body);

  const promise = coordinate.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

/*
router.put('/:TRAVELER_ID', (req,res,next) => {
  const promise = Coordinate.findByIdAndUpdate(
    req.params.TRAVELER_ID,
    req.body,
    { new: false }
  );
  promise.then((traveler) => {
    if(!traveler)
      next({ message: 'The traveler was not found.', code: 1 });

    res.json([...traveler.locations,...req.body.locations]);
  }).catch((err) => {
    res.json(err);
  });
});
*/

module.exports = router;
