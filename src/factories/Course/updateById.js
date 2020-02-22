const parseCourse = require('./_parse')
const {getModel} = require('../../connections/database')

const _parseCourse = ({code, name, site_id}) => {
    return parseCourse({code, name, site_id})
}

const _updateCourse = async (_id, course) => {
    const Course = getModel('Course')

    const select = 'code name status site_id updated_at created_at'

    const doc = await Course.findByIdAndUpdate(_id, {
        ...course,
        status: "updated",
        updated_at: Date.now(),
    }, {new: true}).select(select)

    if(!doc) throw new Error("Course not exists!")

    
    return doc.toJSON()
}

module.exports = async (_id, {code, name, site_id}) => {
    const course = _parseCourse({code, name, site_id})

    const document = await _updateCourse(_id, course)

    return document
}
