import database from '../database.js'

const listarProdutos = async (req, res) => {
    const resultado = await database.query('SELECT * FROM produtos')
    console.log(resultado)
    res.status(200).send({ message: resultado.rows })
}

const cadastrarProdutos = async (req, res) => {
    // const nome = req.body.nome
    // const preco = req.body.preco
    const { nome, preco } = req.body
    const comandoSQL = `INSERT INTO produtos (produto, preco) VALUES ('${nome}', ${preco})`
    await database.query(comandoSQL)
    res.status(201).send({ message: 'Produto inserido' })
}

const apagarProduto = async (req, res) => {
    try {
        console.log('apagar')
        const id = req.params.id
        const comandoSQL = `DELETE FROM produtos WHERE id = ${id}`
        await database.query(comandoSQL)
        res.status(200).send({ message: 'Produto excluido com sucesso' })
    } catch (erro) {
        console.log(erro)
    }
}

export { listarProdutos, cadastrarProdutos, apagarProduto }