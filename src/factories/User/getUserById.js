const {getModel} = require('../../connections/database')

const _findById = async id => {
    const User = getModel('User')
    const select = 'email name status updated_at created_at'
    const doc = await User.findById(id)
        .select(select)

    if (!doc) throw new Error("User not exists!")
    return doc.toJSON()
}

module.exports = id => {
    return _findById(id)
}