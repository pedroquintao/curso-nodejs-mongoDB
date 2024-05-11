import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch(e) {
            res.status(500).json({message: `${e.message} - falha na requisição`})
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch(e) {
            res.status(500).json({message: `${e.message} - falha na requisição do livro`})
        }
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Livro cadastrado com sucesso!", livro: novoLivro });
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado!"});
        } catch(e) {
            res.status(500).json({message: `${e.message} - falha na atualização!`})
        }
    };

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluído com sucesso!"});
        } catch(e) {
            res.status(500).json({message: `${e.message} - falha ao excluir livro!`})
        }
    };
};

export default LivroController;