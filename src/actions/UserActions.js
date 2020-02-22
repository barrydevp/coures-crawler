const User = require('../factories/User')

exports.getListUser = async (query, paging) => {
    return await User.getListUser(query, paging)
}

exports.getUserById = async userId => {
    return await User.getUserById(userId)
}

exports.insertUser = async args => {
    return await User.insertUser(args)
}

exports.updateUser = async (userId, args) => {
    return await User.updateUserById(userId, args)
}

exports.auth = async (args) => {
    return await User.auth(args)
}

exports.changePassword = async (userId, args) => {
    return await User.changePassword(userId, args)
}
