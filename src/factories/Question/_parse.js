const safeTrim = require('../../helpers/safeTrim')

module.exports = ({code, content, answer, quiz_id}) => {
    const _code = safeTrim(code)
    const _content = safeTrim(content)
    const _answer = safeTrim(answer)

    const question = {}

    if(_code) question.code = _code
    if(_content) question.content = _content
    if(_answer) question.answer = _answer
    if(quiz_id) question.quiz_id = quiz_id

    return question
}
