const express = require('express')
const router = express.Router() 
const agentController = require('../controllers/agent.controller')

// API/api/clients
router.post('/', agentController.addAgent)
router.get('/',agentController.getAgents)
router.get('/:id', agentController.getAgent)
router.put('/:id', agentController.updateAgent)
router.delete('/:id', agentController.deleteAgent)

module.exports = router 
