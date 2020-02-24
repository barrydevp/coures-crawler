const {validateString} = require('../../helpers/parser')
const hasOwnProperty = require('../../helpers/hasOwnProperty')
const {isString} = require('../../helpers/is')
const moment = require('moment')

module.exports = ({code, answer, content, source, status, quiz_id, start_date, end_date}) => {
    const defaultStartDate = moment().subtract(3, 'months')
    const defaultEndDate = moment()

    const query = {}

    if (isString(code)) query.code = {'$regex': new RegExp(validateString(code).replace(/\s+/g, '\\s+'), 'g')}

    if (isString(answer)) query.answer = {'$regex': new RegExp(validateString(answer).replace(/\s+/g, '\\s+'), 'g')}

    if (isString(content)) query.content = {'$regex': new RegExp(validateString(content).replace(/\s+/g, '\\s+'), 'g')} 
       
    if (isString(source)) query.source = {'$regex': new RegExp(validateString(source).replace(/\s+/g, '\\s+'), 'g')}    

    if (isString(status)) query.status = validateString(status)
        
    if (isString(quiz_id)) query.quiz_id = validateString(quiz_id)

    const startDate = moment(start_date).isValid() ? moment(start_date) : defaultStartDate
    const endDate = moment(end_date).isValid() ? moment(end_date) : defaultEndDate
    const isDateValid = endDate.isAfter(startDate)

    query.created_at = {
        '$gte': isDateValid ? startDate.toDate() : defaultStartDate.toDate(),
        '$lte': isDateValid ? endDate.toDate() : defaultEndDate.toDate(),
    }

    return query
}
