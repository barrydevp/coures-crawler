const {response} = require('@barrydevp/common')
const SiteActions = require('../actions/SiteActions')

exports.getListSite = (req, res) => {
    const {page, limit, name, url, status, end_date, start_date} = {...req.query}

    SiteActions.getListSite({
        name,
        url,
        status,
        end_date,
        start_date,
    }, {page, limit})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.getSiteById = (req, res) => {
    const {_id} = {...req.params}

    SiteActions.getSiteById(_id)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.insertSite = (req, res) => {
    const _body = {...req.body}

    SiteActions.insertSite(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateSiteById = (req, res) => {
    const {_id} = {...req.params}
    const _body = {...req.body}

    SiteActions.updateSiteById(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateSiteByQuery = (req, res) => {
    const _query = {...req.query}
    const _body = {...req.body}

    SiteActions.updateSiteByQuery(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}