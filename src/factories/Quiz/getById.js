const {getModel} = require('../../connections/database')

const _findQuizById = async _id => {
    const Quiz = getModel('Quiz')
    const select = 'code name status site_id updated_at created_at'
    const doc = await Quiz.findById(_id)
        .select(select)

    if (!doc) throw new Error("Quiz not exists!")
    return doc.toJSON()
}

module.exports = _id => {
    return _findQuizById(_id)
}