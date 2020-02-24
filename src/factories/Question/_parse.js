const safeTrim = require('../../helpers/safeTrim')

module.exports = ({code, content, answer, source, quiz_id}) => {
    const _code = safeTrim(code)
    const _content = safeTrim(content)
    const _answer = safeTrim(answer)
    const _source = safeTrim(source)

    const question = {}

    if(_code) question.code = _code
    if(_content) question.content = _content
    if(_answer) question.answer = _answer
    if(_source) question.source = _source
    if(quiz_id) question.quiz_id = quiz_id

    return question
}
