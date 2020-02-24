const parseSite = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseSite = (site) => {
    return parseSite(site)
}

const _updateSite = (query, site) => {
    const Site = getModel('Site')

    const select = 'name url status updated_at created_at'

    return Site.updateOne(query, {
        ...site,
        status: 'updated',
        updated_at: Date.now(),
    }, {upsert: true, setDefaultsOnInsert: true})

    return Site.findOne(site).select(select).lean()
}

module.exports = async ({qName, qUrl}, {name, url}) => {
    const site = _parseSite({name, url})
    const query = _parseSite({name: qName, url: qUrl})

    const doc = await _updateSite(query, site)

    return {
        query, 
        site,
        data: doc
    }
}
