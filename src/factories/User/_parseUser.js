const safeTrim = require('../../helpers/safeTrim')
const validate = require('../../helpers/validate')
const {hash} = require('../../helpers/bcrypt')

const _checkNotEmpty = () => {
    for (let i in arguments) {
        const arg = arguments[i]
        if (!arg) throw new Error('Params is required!')
    }
}

const _checkValid = msg => value => {
    if (!value) {
        throw new Error(`${msg} is not valid!`)
    }
}

const _isUndef = v => v === null || v === undefined;

exports.parseInfo = ({_email, _name} = {}) => {
    _checkNotEmpty(_email)
    const email = safeTrim(_email)
    if(!_isUndef(_name)) _name = safeTrim(_name)
    const name = _name
    _checkValid("Email")(validate.isEmail(email))

    return {
        email,
        name,
    }
}

exports.parsePassword = async (_password) => {
    _checkNotEmpty(_password)
    _checkValid("Password")(validate.isPassword(_password))

    const password = await hash(_password, 10)

    return password
}
