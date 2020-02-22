const {parseInfo} = require('./_parseUser')
const {getModel} = require('../../connections/database')

const _update = async (id, user) => {
    const User = getModel('User')
    const doc = await User.findByIdAndUpdate(id, {
        ...user,
        status: "updated",
        updated_at: Date.now(),
    })

    if(!doc) throw new Error("User not exists!")

    const select = 'email name status updated_at created_at'
    return User.findById(id)
        .select(select)
        .lean()
}

module.exports = async (id, args) => {
    const {email: _email, name: _name} = args
    const {email, name} = parseInfo({_email, _name})
    const user = {}
    if(email) user.email = email
    if(name) user.name = name

    const document = await _update(id, user)

    return {
        ...document,
    }
}
