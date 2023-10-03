import bcrypt from 'bcrypt'

const salt = 10
export async function createHash(password) {
    const generatedSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, generatedSalt);
    return hashedPassword
}

export async function comparePassword(hash, pass){
    const isValid = await bcrypt.compare(pass, hash)
    return isValid
}