const express = require('express')
const connectDB = require('./config/db')
const  cors = require('cors')


//cargar servidor
const app = express()

//cargar BD
connectDB()

//Seguridad en las peticiones
app.use(express.json())
app.use(cors())

//Manejo de rutas
app.use('/api/clients',require('./routes/client.route'))
app.use('/api/agents',require('./routes/agent.route'))


//Iniciar servidor
app.listen(2500,()=>{
    console.log('Servidor iniciado en el puerto 2500')
})