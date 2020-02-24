const {response} = require('@barrydevp/common')
const CourseActions = require('../actions/CourseActions')

exports.getListCourse = (req, res) => {
    const {page, limit, code, name, status, site_id, end_date, start_date} = {...req.query}

    CourseActions.getListCourse({
        code,
        name,
        status,
        site_id,
        end_date,
        start_date,
    }, {page, limit})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.getCourseById = (req, res) => {
    const {_id} = {...req.params}

    CourseActions.getCourseById(_id)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.insertCourse = (req, res) => {
    const _body = {...req.body}

    CourseActions.insertCourse(_body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateCourseById = (req, res) => {
    const {_id} = {...req.params}
    const _body = {...req.body}

    CourseActions.updateCourseById(_id, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateCourseByQuery = (req, res) => {
    const _query = {...req.query}
    const _body = {...req.body}

    CourseActions.updateCourseByQuery(_query, _body)
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}