const {validateString} = require('../../helpers/parser')
const hasOwnProperty = require('../../helpers/hasOwnProperty')
const moment = require('moment')

module.exports = _query => {
    const defaultStartDate = moment().subtract(3, 'months')
    const defaultEndDate = moment()

    const query = {}

    if (hasOwnProperty(_query, 'code') && _query.code) query.code = {'$regex': new RegExp(validateString(_query.code).replace(/\s+/g, '\\s+'), 'g')}

    if (hasOwnProperty(_query, 'answer') && _query.answer) query.answer = {'$regex': new RegExp(validateString(_query.answer).replace(/\s+/g, '\\s+'), 'g')}

    if (hasOwnProperty(_query, 'content') && _query.content) query.content = {'$regex': new RegExp(validateString(_query.content).replace(/\s+/g, '\\s+'), 'g')}    

    if (hasOwnProperty(_query, 'status') && _query.status) query.status = validateString(_query.status)
        
    if (hasOwnProperty(_query, 'quiz_id') && _query.quiz_id) query.quiz_id = validateString(_query.quiz_id)

    const startDate = moment(_query.start_date).isValid() ? moment(_query.start_date) : defaultStartDate
    const endDate = moment(_query.end_date).isValid() ? moment(_query.end_date) : defaultEndDate
    const isDateValid = endDate.isAfter(startDate)

    query.created_at = {
        '$gte': isDateValid ? startDate.toDate() : defaultStartDate.toDate(),
        '$lte': isDateValid ? endDate.toDate() : defaultEndDate.toDate(),
    }

    return query
}
