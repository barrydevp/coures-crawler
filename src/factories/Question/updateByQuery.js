const parseQuestion = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseQuestion = (question) => {
    return parseQuestion(question)
}

const _updateQuestion = (query, question) => {
    const Question = getModel('Question')

    return Question.updateOne(query, {
        ...question,
        status: 'updated',
        updated_at: Date.now(),
    }, {upsert: true, setDefaultsOnInsert: true})
}

module.exports = async ({qCode, qContent, qQuiz_id}, {code, content, answer, source, quiz_id}) => {
    const question = _parseQuestion({code, content, answer, source, quiz_id})
    const query = _parseQuestion({code: qCode, content: qContent, quiz_id: qQuiz_id})

    await _updateQuestion(query, question)

    return {query, question}
}
