const {getModel} = require('../../connections/database')
const {parsePassword} = require('./_parseUser')
const {compare} = require('../../helpers/bcrypt')

const _changePasswordById = async (id, {password}) => {
    const User = getModel('User')
    const doc = await User.findByIdAndUpdate(id, {
        password,
        status: "change_pass",
        updated_at: Date.now(),
    })

    if(!doc) throw new Error("User not exists!")
}

const _findById = async id => {
    const User = getModel('User')
    const doc = await User.findById(id)

    if(!doc) throw new Error('User not exists!')
    return doc.toJSON()
}

module.exports = async (id, args) => {
    const {oldPassword, newPassword} = args
    if(oldPassword === newPassword) throw new Error("Old password and New password is the same!")

    const _user = await _findById(id)
    const hashPassword = _user.password
    const isTruePass = await compare(oldPassword, hashPassword)

    if(!isTruePass) throw new Error("Wrong password!")

    const password = await parsePassword(newPassword)

    await _changePasswordById(id, {password})

    return "Change password success!"
}
