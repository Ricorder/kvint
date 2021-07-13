const apiRouterCall = require('express').Router();

const {
  findeAllCalls,
  addCall,
  changeStatusCall,
} = require('../controllers/callController');

apiRouterCall.route('/')
  .get(findeAllCalls)
  .post(addCall)
  .patch(changeStatusCall)

module.exports = apiRouterCall
