const parseQuestion = require('./_parse')
const {getModel} = require('../../connections/database')
const updateByQuery = require('./updateByQuery')

module.exports = async ({quiz_id, questions}) => {
    questions.forEach(({content, answer, code}) => {
        const query = {qCode: code, qContent: content, qQuiz_id: quiz_id}
        const question = {code, content, answer, quiz_id}
        updateByQuery(query, question).then(() => console.log(code, "--done!")).catch(e => console.log(code, "--error!", e))
    })
    return {quiz_id, questions}
}
