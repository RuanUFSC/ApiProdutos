import express from 'express'
import { listarProdutos, cadastrarProdutos, apagarProduto } from '../controllers/produtos.js'
const router = express.Router()

router.get('/produtos', listarProdutos)
router.post('/produtos', cadastrarProdutos)
router.delete('/produtos/:id', apagarProduto)

export default router