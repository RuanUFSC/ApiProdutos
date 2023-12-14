import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const database = new pg.Client(process.env.BANCO_DE_DADOS)

database.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conexão com o banco de dados foi estabelecida')
    }
})

export default database