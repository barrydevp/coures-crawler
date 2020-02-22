const {getModel} = require('../../connections/database')
const _buildQuery = require('./_buildQuery')

const _parsePaging = ({page, limit}) => {
    return {
        skip: (page - 1) * limit,
        limit,
    }
}

const _getManyUser = async (query, select, {skip, limit}) => {
    const User = getModel('User')
    const sort = {created_at: -1}

    const users = await User.find(query)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(select)
        .lean()

    return users
}

module.exports = async (_query, select = '', _paging = {page: 0, limit: 10}, isQueryValid = false) => {
    const query = isQueryValid ? _query : _buildQuery(_query)
    const paging = _parsePaging(_paging)

    return await _getManyUser(query, select, paging)
}
