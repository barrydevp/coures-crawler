const safeTrim = require('../../helpers/safeTrim')

module.exports = ({code, name, course_id}) => {
    const _code = safeTrim(code)
    const _name = safeTrim(name)

    const quiz = {}

    if(_code) quiz.code = _code
    if(_name) quiz.name = _name
    if(course_id) quiz.course_id = course_id

    return quiz
}
