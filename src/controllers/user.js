const {sendSuccess, sendError} = require('@pf126/common/helpers/response')
const UserActions = require('../actions/UserActions')

exports.getListUser = (req, res) => {
    const {page, limit, carrier, source, number, status, order_number, end_date, start_date, transit_time} = {...req.query}

    UserActions.getListUser({
        carrier,
        source,
        number,
        status,
        end_date,
        start_date,
        order_number,
        transit_time,
    }, {page, limit})
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}

exports.getUserById = (req, res) => {
    const {userId} = {...req.params}

    UserActions.getUserById(userId)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}

exports.insertUser = (req, res) => {
    const args = {...req.body}

    UserActions.insertUser(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}

exports.updateUser = (req, res) => {
    const {userId} = {...req.params}
    const args = {...req.body}

    UserActions.updateUser(userId, args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}

exports.auth = (req, res) => {
    const args = {...req.body}

    UserActions.auth(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}

exports.changePassword = (req, res) => {
    const {userId} = {...req.params}
    const args = {...req.body}

    UserActions.changePassword(userId, args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}