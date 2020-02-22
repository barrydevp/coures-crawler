const {getModel} = require('../../connections/database')
const {parseInfo, parsePassword} = require('./_parseUser')

const _insert = async user => {
    const User = getModel('User')
    const _user = new User(user)
    const doc = await _user.save()

    return doc.toJSON()
}

const _isUserExists = async ({email}) => {
    const User = getModel('User')
    const _user = await User.findOne({email})
    return !!_user
}

module.exports = async args => {
    const {email: _email, password: _password, name: _name} = args
    const {email, name} = parseInfo({_email, _name})
    const isUserExists = await _isUserExists({email})
    if (isUserExists) throw new Error('Email is exists!')

    const password = await parsePassword(_password)

    const document = await _insert({email, name, password})

    return {
        ...document
    }
}
