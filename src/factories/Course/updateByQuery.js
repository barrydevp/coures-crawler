const parseCourse = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseCourse = (course) => {
    return parseCourse(course)
}

const _updateCourse = (query, course) => {
    const Course = getModel('Course')

    const select = 'code name status site_id updated_at created_at'

    return Course.updateOne(query, {
        ...course,
        status: 'updated',
        updated_at: Date.now(),
    }, {upsert: true, setDefaultsOnInsert: true})

    return Site.findOne(course).select(select).lean()
}

module.exports = async ({qCode, qName, qSite_id}, {code, name, site_id}) => {
    const course = _parseCourse({code, name, site_id})
    const query = _parseCourse({code: qCode, name: qName, site_id: qSite_id})

    const doc = await _updateCourse(query, course)

    return {
        query, 
        course,
        data: doc
    }
}
