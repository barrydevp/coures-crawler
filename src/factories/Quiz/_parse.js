const safeTrim = require('../../helpers/safeTrim')

module.exports = ({code, name, course_id}) => {
    // const _code = safeTrim(code)
    // const _name = safeTrim(name)

    const quiz = {}

    if(code) quiz.code = safeTrim(code)
    if(name) quiz.name = safeTrim(name)
    if(course_id) quiz.course_id = course_id

    return quiz
}
