const pkg = require('./package.json')

module.exports = {
    helpers: {
        template_version() {
            return pkg.version
        },
    },

    prompts: {
        name: {
            when: 'isNotTest',
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            when: 'isNotTest',
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A Apicloud & Vue project',
        },
        author: {
            when: 'isNotTest',
            type: 'string',
            message: 'Author',
            default: 'ghostsf',
        }
    }
}