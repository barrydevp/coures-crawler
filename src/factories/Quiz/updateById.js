const parseQuiz = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseQuiz = ({code, name, course_id}) => {
    return parseQuiz({code, name, course_id})
}

const _updateQuiz = async (_id, quiz) => {
    const Quiz = getModel('Quiz')

    const select = 'code name status course_id updated_at created_at'

    const doc = await Quiz.findByIdAndUpdate(_id, {
        ...quiz,
        status: "updated",
        updated_at: Date.now(),
    }, {new: true}).select(select)

    if(!doc) throw new Error("Quiz not exists!")

    
    return doc.toJSON()
}

module.exports = async (_id, {code, name, course_id}) => {
    const quiz = _parseQuiz({code, name, course_id})

    const document = await _updateQuiz(_id, quiz)

    return document
}
