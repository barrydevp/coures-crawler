const {getModel} = require('../../connections/database')

const _findQuestionById = async _id => {
    const Question = getModel('Question')
    const select = 'code content answer source status quiz_id updated_at created_at'
    const doc = await Question.findById(_id)
        .select(select)

    if (!doc) throw new Error("Question not exists!")
    return doc.toJSON()
}

module.exports = _id => {
    return _findQuestionById(_id)
}