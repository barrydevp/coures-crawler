const parseQuestion = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseQuestion = ({code, content, answer, quiz_id}) => {
    return parseQuestion({code, content, answer, quiz_id})
}

const _updateQuestion = async (_id, question) => {
    const Question = getModel('Question')

    const select = 'code content answer status quiz_id updated_at created_at'

    const doc = await Question.findByIdAndUpdate(_id, {
        ...question,
        status: "updated",
        updated_at: Date.now(),
    }, {new: true}).select(select)

    if(!doc) throw new Error("Question not exists!")

    
    return doc.toJSON()
}

module.exports = async (_id, {code, content, quiz_id}) => {
    const question = _parseQuestion({code, content, answer, quiz_id})

    const document = await _updateQuestion(_id, question)

    return document
}
