const {validateString, validateInteger} = require('../../helpers/parser')
const hasOwnProperty = require('../../helpers/hasOwnProperty')
const {isString, isNumber} = require('../../helpers/is')
const moment = require('moment')

module.exports = ({url, total_question, success_question, error_question, status, quiz_id, start_date, end_date}) => {
    const defaultStartDate = moment().subtract(3, 'months')
    const defaultEndDate = moment()

    const query = {}

    if (isString(url)) query.url = {'$regex': new RegExp(validateString(url).replace(/\s+/g, '\\s+'), 'g')}

    if (isNumber(+total_question)) query.total_question = validateInteger(total_question)

    if (isNumber(+success_question)) query.success_question = validateInteger(success_question)

    if (isNumber(+error_question)) query.error_question = validateInteger(error_question)    

    const startDate = moment(start_date).isValid() ? moment(start_date) : defaultStartDate
    const endDate = moment(end_date).isValid() ? moment(end_date) : defaultEndDate
    const isDateValid = endDate.isAfter(startDate)

    query.created_at = {
        '$gte': isDateValid ? startDate.toDate() : defaultStartDate.toDate(),
        '$lte': isDateValid ? endDate.toDate() : defaultEndDate.toDate(),
    }

    return query
}
