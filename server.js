import express from 'express'
import router from './routes/produtos.js'
const app = express()

// Permitir a leitura do body em json
app.use(express.json())
// Importar as rotas
app.use(router)

app.listen(3000, () => console.log('Servidor rodando'))