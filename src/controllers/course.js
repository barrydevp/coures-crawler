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
    const {code, name, site_id} = {...req.body}

    CourseActions.insertCourse({code, name, site_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}

exports.updateCourse = (req, res) => {
    const {_id} = {...req.params}
    const {code, name, site_id} = {...req.body}

    CourseActions.updateCourse(_id, {code, name, site_id})
        .then(response.sendSuccess(req, res))
        .catch(response.sendError(req, res))
}