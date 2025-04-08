const Agent = require('../models/agent.model')

exports.addAgent = async(req, res) => {
    try {
        let agent
        agent = new Agent(req.body)
        await agent.save()
        res.send(agent)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Existe un problema en el registro del agente')
    }
}

exports.getAgents = async(req, res) => {
    try {
        const agents = await Agent.find()
        console.log(agents)
        res.json(agents)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Existe un problema al cargar los agentes')
    }
}

exports.getAgent = async(req, res) => {
    try {
        let agent = await Agent.findById(req.params.id)
        if(!agent){
            res.status(404).send('El agente no existe')
        }
        res.json(agent)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Existe un problema al cargar el agente')
    }
}
exports.updateAgent = async(req, res) =>{
    try {
        const {dni,firstname,email} = req.body
        let agent = await Agent.findById(req.params.id)
        if(!agent){
            res.status(404).send('El agente no existe')
        }
        agent.dni = dni
        agent.firstname = firstname
        agent.email = email


        agent = await Agent.findOneAndUpdate({_id:req.params.id},agent,{new:true})
        res.json(agent)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Existe un problema al actualizar el agente')
    }
}
exports.deleteAgent = async(req,res)=>{
    try {
        let agent = await Agent.findById(req.params.id)
        if(!agent){
            res.status(404).send('El Agente no existe')
        }
        await Agent.findOneAndDelete({_id:req.params.id})
        res.json({msg:'Agente Eliminado'})
    }catch(error){
        console.log(error)
        res.status(500).send('Existe un problema al eliminar el agente')
    }
}

