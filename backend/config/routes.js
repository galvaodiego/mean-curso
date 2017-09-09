const express = require('express')

module.exports = function(server){
  //API routes
  const router = express.Router()
  server.use('/api',router)

// Rotas das API
const BillingCycleService = require('../api/billingCycle/billingCycleService')
billingCycleService.register(router, '/billingCycles')

const billingCycleSummaryService = require('../billingCycleSummary/billingCycleSummaryService')
router.route('/billingSummary').get(billingCycleSummaryService.getSummary)

}
