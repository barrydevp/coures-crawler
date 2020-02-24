const Site = require('../factories/Site')

exports.getListSite = (query, paging) => {
    return Site.getListSite(query, paging)
}

exports.getSiteById = _id => {
    return Site.getSiteById(_id)
}

exports.insertSite = body => {
    return Site.insertSite(body)
}

exports.updateSiteById = (_id, body) => {
    return Site.updateSiteById(_id, body)
}

exports.updateSiteByQuery = (query, body) => {
    return Site.updateSiteByQuery(query, body)
}