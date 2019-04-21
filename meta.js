const pkg = require('./package.json')

module.exports = {
    helpers: {
        template_version() {
            return pkg.version
        },
    },

    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A Apicloud & Vue project',
        },
        author: {
            type: 'string',
            message: 'Author',
            default: 'ghostsf',
        }
    }
}