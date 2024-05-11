import express from 'express';
import conectaNaDatabase from './config/dbConect.js';
import livro from './models/Livro.js';
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!")
})

const app = express();

routes(app);

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1);
    res.status(200).send('Livro removido!');
})

export default app;

