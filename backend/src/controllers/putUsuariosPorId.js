import { prisma } from "../repositories.js";

export default async (req, res) => {
    const id = req.params.id;
    const { name } = req.body

    if (!id) return res.status(400).json("O id é obrigatorio!")
    const usuario = await prisma.usuario.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!usuario) return res.status(400).json("O usuario não existe")
    const updatedUsuario = await prisma.usuario.update({
        where: {
            id: usuario.id
        }, data: {
            ...usuario,
            primeiro_nome: name,
        }
    })
    return res.status(200).json(updatedUsuario)
}