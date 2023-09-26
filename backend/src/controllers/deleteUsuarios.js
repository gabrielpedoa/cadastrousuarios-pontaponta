import { prisma } from "../repositories.js";

export default async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json("o id é obrigatório")

    const usuario = await prisma.usuario.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!usuario) return res.status(400).json("O usuario não existe")

    await prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data: {
            deleted: 1
        }
    })
    return res.status(400).json(true)
}