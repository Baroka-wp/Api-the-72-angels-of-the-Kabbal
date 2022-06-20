const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const AngelsModel  = require('../models/angelsModel');


// Get all student
router.get('/', (req, res) => {
  AngelsModel.find((err, docs) => {
    if(!err) res.send(docs);
    else console.log("Erros to get data : " + err);
  });
});

// Post new student
router.post('/', (req, res) => {
  const newRecord = new AngelsModel({
    order: req.body.order,
    hierarchy: req.body.hierarchy,
    fullName: req.body.fullName,
    definitionOfName: req.body.definitionOfName,
    godName: req.body.godName,
    description: req.body.description,
    regenceMonth: req.body.regenceMonth,
    regenceDays: req.body.regenceDays,
    regenceHours: req.body.regenceHours,
    colors: req.body.colors,
    scent: req.body.scent,
    gender: req.body.gender,
    invocation: req.body.invocation,
    exhortation: req.body.exhortation,
    callFormula: req.body.callFormula,
    psalms: req.body.psalms,
    category: req.body.category
  });
  newRecord.save((err, docs) => {
    if(!err) res.send(docs);
    else console.log('Error : ' + err)
  })
})

// edit
router.put('/:id', (req,res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow: ' + req.params.id);

  const updateRecord = {
    order: req.body.order,
    hierarchy: req.body.phone,
    fullName: req.body.fullName,
    definitionOfName: req.body.definitionOfName,
    description: req.body.description,
    regenceDays: req.body.regenceDays,
    regenceHours: req.body.regenceHours,
    colors: req.body.colors,
    scent: req.body.scent,
    gender: req.body.gender,
    invocation: req.body.invocation,
    exhortation: req.body.exhortation,
    callFormula: req.body.callFormula,
    psalms: req.body.psalms,
    category: req.body.category
  }

  AngelsModel.findByIdAndUpdate(
    req.params.id,
    {$set: updateRecord},
    { new: true},
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log('Update error : ' + err);
    }
  )
})

// delete
router.delete('/:id', (req,res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow: ' + req.params.id);

  AngelsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log('Deleted error :' + err);
    }
  )

})

module.exports = router;
