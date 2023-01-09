const emailMaskTest = (email) => {
    if(email == ''){
        return false
    }
    const mask = /\S+@\S+\.\S+/
    return mask.test(email)
}
export default emailMaskTest