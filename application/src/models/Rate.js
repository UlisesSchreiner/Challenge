const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({

    pair: {
        from: {
            rate: String,
            amount: Number
        },
        to: {
            rate: String,
            amount: Number
        }
    },
    fee: {
        type: Number
    },
    feeAmount: {
        type: Number
    },
    mark: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const RateExp = mongoose.model('rate', RateSchema);

module.exports = RateExp; 