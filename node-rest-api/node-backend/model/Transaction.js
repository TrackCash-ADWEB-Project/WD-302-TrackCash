const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Transactions = new Schema({
  transaction_type: {
    type: String
  },
  transaction_name: {
    type: String
  },
  amount: {
    type: Number
  },
  date: {
    type: Date
  }
}, {
  collection: 'transactions'
})
 
module.exports = mongoose.model('Transactions', Transactions)