import { prisma } from '../repositories.js';

export default async (req, res) => {
    const usuarios = await prisma.usuario.findMany({
        where: {
            deleted: 0
        }
    })
    return res.status(200).json(usuarios)
}