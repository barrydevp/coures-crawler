const {getModel} = require('../../connections/database')

const _findCourseById = async _id => {
    const Course = getModel('Course')
    const select = 'code name status site_id updated_at created_at'
    const doc = await Course.findById(_id)
        .select(select)

    if (!doc) throw new Error("Course not exists!")
    return doc.toJSON()
}

module.exports = _id => {
    return _findCourseById(_id)
}