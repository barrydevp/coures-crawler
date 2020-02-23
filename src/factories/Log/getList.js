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

const _getManyLog = (query, {skip, limit, select, sort}, options = {}) => {
    const Log = getModel('Log')

    return Log.find(query)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(select)
        .lean()
}

const _count = query => {
    const Log = getModel('Log')

    return Log.countDocuments(query)
}

const _get = (query, {skip, limit}) => {
    const select = 'url total_question success_question error_question status quiz_id updated_at created_at'
    const sort = {created_at: -1}

    return _getManyLog(query, {skip, limit, select, sort})
}

module.exports = async ({url, total_question, success_question, error_question, status, quiz_id, start_date, end_date}, {page, limit}) => {
    const {page: _page, skip: _skip, limit: _limit} = _parsePaging({page, limit})
    const query = _buildQuery({url, total_question, success_question, error_question, status, quiz_id, start_date, end_date})

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
