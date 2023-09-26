export default (value, type) => {
    if(!value) throw new Error(`o(a) ${type} é obrigatorio(a)!`)
}