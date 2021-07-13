const { model, Schema, pluralize } = require('mongoose');
pluralize(null);

const CallSchema = new Schema({
  phone: String,
  call_date: Date,
  status: String,
},
  { timestamps: true }
)


const Call = model('Call', CallSchema)
module.exports = Call
