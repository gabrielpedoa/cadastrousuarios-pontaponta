//pegar autorization do headers
//extrair o token do authorization
//verificar se o token é valido

import { isTokenValid } from "../utils/createToken.js";


export default async (req, res, next) => {
    try {
        console.log(req.headers);
        const autorization = req.headers.authorization
        if (!autorization) return res.status(401).json('Não autorizado')
        const [bearer, token] = autorization.split(" ")
        console.log(token);
        if (!token) return res.status(401).json('Não autorizado')
        await isTokenValid(token)
        next()
    } catch (err) {
        console.log(err);
        return res.status(401).json('Não autorizado')
    }
}