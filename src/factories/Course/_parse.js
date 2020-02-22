const safeTrim = require('../../helpers/safeTrim')

module.exports = ({code, name, site_id}) => {
    const _code = safeTrim(code)
    const _name = safeTrim(name)

    const course = {}

    if(_code) course.code = _code
    if(_name) course.name = _name
    if(site_id) course.site_id = site_id

    return course
}
