const Validation = (value, rules) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}/
    let isValid = true
    let messages = []
    if (rules.required) {
        isValid = value.trim() !== ''
        if(!isValid)
        messages.push('Field is Required')
    }
    if (rules.email) {
        isValid = value.match(emailRegex) && isValid
        if(!isValid)
        messages.push(`Invalid email`)
    }
    if (rules.password) {
        isValid = value.match(passwordRegex) && isValid
        if(!isValid)
        messages.push(`Invalid password`)
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
        if(!isValid)
        messages.push(`Minimum ${rules.minLength} character is required`)
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
        if(!isValid)
        messages.push(`Maximum ${rules.maxLength} character is allowed`)
    }
    return {isValid, messages}
}
export default Validation