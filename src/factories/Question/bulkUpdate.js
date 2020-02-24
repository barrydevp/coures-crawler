const parseQuestion = require('./_parse')
const {getModel} = require('../../connections/database')
const updateByQuery = require('./updateByQuery')
const insertLog = require('../Log/insert')
const Promise = require('bluebird')

module.exports = async ({quiz_id, questions, url, source}) => {

	setTimeout(async () => {
		try {
			const result = await Promise.all(
			    (questions || []).map(({content, answer, code}) => {
			        const query = {qCode: code, qContent: content, qQuiz_id: quiz_id}
			        const question = {
			        	code, 
			        	content, 
			        	answer,
			        	source: source || 'unknown',
			        	quiz_id,
			        }

			        return updateByQuery(query, question)
			        	.then(() => {
				        	console.log(code, "--done!")

				        	return 'success_question'
				    	}).catch(e => {
				    		console.log(code, "--error!", e)

				    		return 'error_question'
				    	})
			    })
			)

			const log = {
				url,
				'total_question': result.length,
				'success_question': 0,
				'error_question': 0,
				quiz_id,
				'status': 'unknown'
			}

			result.forEach(e => log[e]++)

			if(log.success_question == 0) log.status = 'error'
			if(result.length && log.error_question == 0) log.status = 'success'

			const doc = await insertLog(log)
		} catch(e) {
			console.log(e)
		}
	}, 0)


    return {quiz_id, questions, url}
}
