const Log = require('../factories/Log')

exports.getListLog = (query, paging) => {
    return Log.getListLog(query, paging)
}

exports.getLogById = _id => {
    return Log.getLogById(_id)
}

exports.insertLog = body => {
    return Log.insertLog(body)
}

exports.updateLog = (_id, body) => {
    return Log.updateLogById(_id, body)
}