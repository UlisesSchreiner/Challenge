// Rate model
const rate = require('../models/Rate');

// Get rates list
async function get(req, res) {
  try {
    let arr = await rate.find();
    return res.response(arr).type('application/json').code(200);
  } catch (err) {
    return res.response({ status: 'ERR' }).type('application/json').code(500);
  }
}

// Post new rate
async function postOne(req, res) {
  try {

    const newRateObj = new rate(req.payload);

    // Check numeric params
    if (isNaN(newRateObj.pair.from.amount) || isNaN(newRateObj.pair.to.amount)) {
      return res.response({ status: 'ERR' }).type('application/json').code(409);
    }

    // Check valid amount
    if (newRateObj.pair.from.amount <= 0 && newRateObj.pair.to.amount <= 0) {
      return res.response({ status: 'ERR' }).type('application/json').code(409);
    }

    // Save rate
    let saveRate = await newRateObj.save();
    return res.response(saveRate).type('application/json').code(201);
  } catch (err) {
    return res.response({ status: 'ERR' }).type('application/json').code(500);
  }
}

module.exports = {
  get,
  postOne
}