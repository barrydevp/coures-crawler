const {getModel} = require('../../connections/database')
const parseQuiz = require('./_parse')

const _parseQuiz = ({code, name, course_id}) => {
    return parseQuiz({code, name, course_id})
}

const _insertQuiz = async quiz => {
    const Quiz = getModel('Quiz')
    const _quiz = new Quiz(quiz)
    const doc = await _quiz.save()

    return doc.toJSON()
}

const _isQuizCodeExists = async ({code, course_id}) => {
    const Quiz = getModel('Quiz')
    const _quiz = await Quiz.findOne({code, course_id})
    return !!_quiz
}

module.exports = async ({code, name, course_id}) => {
    const quiz = _parseQuiz({code, name, course_id})

    const isQuizCodeExists = await _isQuizCodeExists({code: quiz.code, course_id: quiz.course_id})
    if (isQuizCodeExists) throw new Error('Quiz code is exists!')

    const document = await _insertQuiz(quiz)

    return document
}
