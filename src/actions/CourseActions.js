const Course = require('../factories/Course')

exports.getListCourse = (query, paging) => {
    return Course.getListCourse(query, paging)
}

exports.getCourseById = _id => {
    return Course.getCourseById(_id)
}

exports.insertCourse = body => {
    return Course.insertCourse(body)
}

exports.updateCourseById = (_id, body) => {
    return Course.updateCourseById(_id, body)
}

exports.updateCourseByQuery = (query, body) => {
    return Course.updateCourseByQuery(query, body)
}