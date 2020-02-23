const {getModel} = require('../../connections/database')

const _findLogById = async _id => {
    const Log = getModel('Log')
    const select = 'url total_question success_question error_question status quiz_id updated_at created_at'
    const doc = await Log.findById(_id)
        .select(select)

    if (!doc) throw new Error("Log not exists!")
    return doc.toJSON()
}

module.exports = _id => {
    return _findLogById(_id)
}