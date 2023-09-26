import { prisma } from "../repositories.js"
import existsOrError from "../utils/existsOrError.js"

export default async (req, res) => {
    try {
        const { nome, sobrenome, idade, endereco, cidade, pais } = req.body
        existsOrError(nome, "nome")
        existsOrError(sobrenome, "sobrenome")
        existsOrError(idade, "idade")
        existsOrError(endereco, "endereco")
        existsOrError(pais, "pais")
        const usuario = await prisma.usuario.create({
            data: {
                cidade,
                endereco,
                idade: Number(idade),
                pais,
                primeiro_nome: nome,
                sobrenome,
            }
        })

        return res.status(201).json(usuario)
    } catch (error) {
        const { message } = error;
        return res.status(400).json(message)
    }
}