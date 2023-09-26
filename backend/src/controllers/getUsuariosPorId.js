import { prisma } from '../repositories.js';

export default async (req, res) => {
    const id = req.params.id

    if (!id) return res.status(400).json("O id é obrigatório!")
    const result = await prisma.usuario.findFirst({
        where: {
            id: Number(id)
        }
    })
    return res.status(200).json(result);
}