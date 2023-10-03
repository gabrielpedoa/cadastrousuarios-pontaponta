import { prisma } from "../repositories.js"
import { createHash } from "../utils/encrypter.js"
import { generateToken } from "../utils/createToken.js"
import existsOrError from "../utils/existsOrError.js"

export default async (req, res) => {
    try {
        const { nome, sobrenome, idade, endereco, cidade, pais, email, password} = req.body
        existsOrError(nome, "nome")
        existsOrError(sobrenome, "sobrenome")
        existsOrError(idade, "idade")
        existsOrError(endereco, "endereco")
        existsOrError(pais, "pais")
        existsOrError(email,"email")
        existsOrError(password,"password")

        const verifyEmailAlreadyUsed = await prisma.usuario.findFirst({
            where:{
                email
            }
        })

        if(verifyEmailAlreadyUsed) return res.status(400).json('O email esta sendo usado')
        const hashedPassword = await createHash(password)

        const usuario = await prisma.usuario.create({
            data: {
                cidade,
                endereco,
                idade: Number(idade),
                pais,
                primeiro_nome: nome,
                sobrenome,
                email,
                password: hashedPassword
            }
        })
        
        const token = await generateToken(usuario)

        return res.status(201).json({token, usuario})
    } catch (error) {
        const { message } = error;
        return res.status(400).json(message)
    }
}