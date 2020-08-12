const router = require('express').Router();
const Plan = require('../models/plan.model');
const { response } = require('express');

router.route('/').get((request, response) => {
  Plan.find()
    .then(plans => response.json(plans))
    .catch(error => response.status(400).json("Error: " + error));
});

router.route('/add').post((request, response) => {
  const username = request.body.username;
  const description = request.body.description;
  const duration = Number(request.body.duration);
  const date = Date.parse(request.body.date);

  const newPlan = new Plan({
    username,
    description,
    duration,
    date
  });

  newPlan.save().then(() => response.json('Plan added!')).catch(error => response.status(400).json("Error: " + error));
});

router.route('/:id').get((request, response) => {
  Plan.findById(request.params.id)
    .then(plan => response.json(plan))
    .catch(error => response.status(400).json("Error: " + error));
});

router.route('/:id').delete((request, response) => {
  Plan.findByIdAndDelete(request.params.id)
    .then(() => response.json("Plan deleted"))
    .catch(error => response.status(400).json("Error: " + error));
});

router.route('/update/:id').post((request, response) => {
  Plan.findById(request.params.id)
    .then(plan => {
      plan.username = request.body.username;
      plan.description = request.body.description;
      plan.duration = Number(request.body.duration);
      plan.date = Date.parse(request.body.date);

      plan.save()
        .then(() => response.json('Plan updated'))
        .catch(error => response.status(400).json("Error: " + error));
    }).catch(error => response.status(400).json("Error: " + error));
});

module.exports = router;
