// veirificar se email e senha existe[x]
// verificar se email existe no banco [x]
// verificar se a senha é valida [x]
// gerar token de acesso [x]

import { prisma } from "../repositories.js"
import { generateToken } from "../utils/createToken.js"
import { comparePassword } from "../utils/encrypter.js"

export  async function login (req, res){
    const {email, password} = req.body
    if(!email) return res.status(400).json('O email é necessario')
    if(!password) return res.status(400).json('Verifique a senha necessaria')

    const usuario = await prisma.usuario.findFirst({
        where: {
            email,
        }
    })

    if(!usuario) return res.status(400).json('Email/senha são invalidos')
    const comparePass = await comparePassword(usuario.password, password)
console.log(comparePass);
    if(!comparePass) return res.status(400).json('Email/senha são invalidos')

    const token = await generateToken(usuario)

    return res.status(200).json({token, usuario})
}