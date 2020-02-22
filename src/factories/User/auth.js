const {getModel} = require('../../connections/database')
const {parseInfo} = require('./_parseUser')
const {compare} = require('../../helpers/bcrypt')

const _findOne = async ({email}) => {
    const User = getModel('User')
    const doc = await User.findOne({email})

    if(!doc) throw new Error('Email not exists!')
    return doc.toJSON()
}

module.exports = async args => {
    const {email: _email, password: _password} = args
    const {email} = parseInfo({_email})
    const _user = await _findOne({email})
    const hashPassword = _user.password
    const isTruePass = await compare(_password, hashPassword)

    if(!isTruePass) throw new Error("Wrong password!")

    return "Authenticate success!"
}
