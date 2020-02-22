const getMany = require('./_getManyByQuery')
const parsePaging = require('../../helpers/parsePaging')
const {getModel} = require('../../connections/database')
const _buildQuery = require('./_buildQuery')

const _validatePaging = (page, limit) => parsePaging({page, limit})

const _count = async query => {
    const User = getModel('User')

    return User.countDocuments(query)
}

const _get = async (query, paging) => {
    const select = 'email name status updated_at created_at'

    return await getMany(query, select, paging, true)
}

module.exports = async ({email, name, status, end_date, start_date}, {page, limit}) => {
    const paging = _validatePaging(page, limit)
    const query = _buildQuery({email, name, status, end_date, start_date})

    const [data, total] = await Promise.all([
        _get(query, paging, true),
        _count(query)
    ])

    return {
        data, total, page: paging.page, limit: paging.limit,
    }
}
