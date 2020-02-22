const parseQuestion = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseQuestion = ({code, content, answer, quiz_id}) => {
    return parseQuestion({code, content, answer, quiz_id})
}

const _updateQuestion = (query, question) => {
    const Question = getModel('Question')

    return Question.updateOne(query, {
        ...question,
        status: 'crawler',
        updated_at: Date.now(),
    }, {upsert: true, setDefaultsOnInsert: true})
}

module.exports = async ({qCode, qContent, qQuiz_id}, {code, content, answer, quiz_id}) => {
    const question = _parseQuestion({code, content, answer, quiz_id})
    const query = _parseQuestion({code: qCode, content: qContent, quiz_id: qQuiz_id})

    await _updateQuestion(query, question)

    return {query, question}
}
