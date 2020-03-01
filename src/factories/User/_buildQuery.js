const {validateString} = require('../../helpers/parser')
const {escapeStringRegex} = require('../../helpers/parseRegex')
const hasOwnProperty = require('../../helpers/hasOwnProperty')
const moment = require('moment')

module.exports = _query => {
    const defaultStartDate = moment().subtract(3, 'months')
    const defaultEndDate = moment()

    const query = {}

    if (hasOwnProperty(_query, 'email') && _query.email) query.email = {'$regex': new RegExp(escapeStringRegex(validateString(_query.email)), 'gi')}

    if (hasOwnProperty(_query, 'name') && _query.name) query.name = {'$regex': new RegExp(escapeStringRegex(validateString(_query.name)), 'gi')}

    if (hasOwnProperty(_query, 'status') && _query.status) query.status = validateString(_query.status)

    const startDate = moment(_query.start_date).isValid() ? moment(_query.start_date) : defaultStartDate
    const endDate = moment(_query.end_date).isValid() ? moment(_query.end_date) : defaultEndDate
    const isDateValid = endDate.isAfter(startDate)

    query.created_at = {
        '$gte': isDateValid ? startDate.toDate() : defaultStartDate.toDate(),
        '$lte': isDateValid ? endDate.toDate() : defaultEndDate.toDate(),
    }

    return query
}
