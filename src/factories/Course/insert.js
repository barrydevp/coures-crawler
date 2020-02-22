const {getModel} = require('../../connections/database')
const parseCourse = require('./_parse')

const _parseCourse = ({code, name, site_id}) => {
    return parseCourse({code, name, site_id})
}

const _insertCourse = async course => {
    const Course = getModel('Course')
    const _course = new Course(course)
    const doc = await _course.save()

    return doc.toJSON()
}

const _isCourseCodeExists = async ({code, site_id}) => {
    const Course = getModel('Course')
    const _course = await Course.findOne({code, site_id})
    return !!_course
}

module.exports = async ({code, name, site_id}) => {
    const course = _parseCourse({code, name, site_id})

    const isCourseCodeExists = await _isCourseCodeExists({code: course.code, site_id: course.site_id})
    if (isCourseCodeExists) throw new Error('Course code is exists!')

    const document = await _insertCourse(course)

    return document
}
