exports.escapeStringRegex = str => {
	return str.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, '\\$&')
}