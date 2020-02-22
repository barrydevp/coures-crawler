const Promise = require('bluebird')
const parsePaging = require('../../helpers/parsePaging')
const {getModel} = require('../../connections/database')
const _buildQuery = require('./_buildQuery')

const _parsePaging = ({page, limit}) => {
    const {page: _page, limit: _limit} = parsePaging({page, limit})

    return {
        page: _page,
        skip: (_page - 1) * _limit,
        limit: _limit,
    }
}

const _getManyCourse = (query, {skip, limit, select, sort}, options = {}) => {
    const Course = getModel('Course')

    return Course.find(query)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(select)
        .lean()
}

const _count = query => {
    const Course = getModel('Course')

    return Course.countDocuments(query)
}

const _get = (query, {skip, limit}) => {
    const select = 'code name status site_id updated_at created_at'
    const sort = {created_at: -1}

    return _getManyCourse(query, {skip, limit, select, sort})
}

module.exports = async ({code, name, status, site_id, end_date, start_date}, {page, limit}) => {
    const {page: _page, skip: _skip, limit: _limit} = _parsePaging({page, limit})
    const query = _buildQuery({code, name, status, site_id, end_date, start_date})

    const [data, total] = await Promise.all([
        _get(query, {skip: _skip, limit: _limit}),
        _count(query)
    ])

    return {
        data, 
        total, 
        page: _page, 
        limit: _limit,
    }
}
