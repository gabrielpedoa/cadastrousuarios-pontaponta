import jwt from 'jsonwebtoken'

const secret = 'meusecredo'

export async function generateToken(value) {
    const token = await jwt.sign(value, secret)
    return token
}

export async function isTokenValid(token){
    await jwt.verify(token, secret)
}