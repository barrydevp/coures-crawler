const {getModel} = require('../../connections/database')
const parseQuestion = require('./_parse')

const _parseQuestion = ({code, content, answer, quiz_id}) => {
    return parseQuestion({code, content, answer, quiz_id})
}

const _insertQuestion = async question => {
    const Question = getModel('Question')
    const _question = new Question(question)
    const doc = await _question.save()

    return doc.toJSON()
}

const _isQuestionCodeExists = async ({code, quiz_id}) => {
    const Question = getModel('Question')
    const _question = await Question.findOne({code, quiz_id})
    return !!_question
}

module.exports = async ({code, content, answer, quiz_id}) => {
    const question = _parseQuestion({code, content, answer, quiz_id})

    const isQuestionCodeExists = await _isQuestionCodeExists({code: question.code, quiz_id: question.quiz_id})
    if (isQuestionCodeExists) throw new Error('Question code is exists!')

    const document = await _insertQuestion(question)

    return document
}
