import 'dotenv/config'
import express from 'express'
import fbiRoutes from './routes/fbi.routes.js'


const app = express()
const __dirname = import.meta.dirname


app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))
app.use('/api', fbiRoutes)


//Rutas

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.get('/perfil', (_, res) => {
    res.sendFile(__dirname + '/public/perfil.html');
});

app.use('*', (_, res) => {
    res.status(404).json({ ok: false, msg: 'La ruta ingresada no existe' })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`))