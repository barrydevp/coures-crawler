const parseQuiz = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseQuiz = ({code, name, course_id}) => {
    return parseQuiz({code, name, course_id})
}

const _updateQuiz = async (query, quiz) => {
    const Quiz = getModel('Quiz')

    const select = 'code name status course_id updated_at created_at'

    const result = await Quiz.updateOne(query, {
        ...quiz,
        status: 'updated',
        updated_at: Date.now(),
    }, {upsert: true, setDefaultsOnInsert: true})

    return Quiz.findOne(quiz).select(select).lean()
}

module.exports = async ({qCode, qName, qCourse_id}, {code, name, course_id}) => {
    const quiz = _parseQuiz({code, name, course_id})
    const query = _parseQuiz({code: qCode, name: qName, course_id: qCourse_id})

    const doc = await _updateQuiz(query, quiz)

    return {
        query, 
        quiz,
        data: doc
    }
}
