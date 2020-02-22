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
    const {name, url} = {...req.body}

    SiteActions.insertSite({name, url})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateSite = (req, res) => {
    const {_id} = {...req.params}
    const {name, url} = {...req.body}

    SiteActions.updateSite(_id, {name, url})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}