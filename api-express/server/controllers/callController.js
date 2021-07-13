const Call = require('../models/call');

async function findeAllCalls (req, res) {
  let allCalls = await Call.find()
  res.json(allCalls)
}

async function addCall (req, res) {
  console.log(req.body);
  const {phone, status} = req.body
  if (phone && status) {
    const newCall = await Call.create({
      phone,
      status,
    })
    return res.json(newCall)
  }
  return res.sendStatus(418)
}

async function changeStatusCall (req, res) {
  const { id, status } = req.body
  const changedStatusCall = await Call.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  )
  return res.json(changedStatusCall)
}

module.exports = {
  findeAllCalls,
  addCall,
  changeStatusCall,
};
