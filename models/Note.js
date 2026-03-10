const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        important: {
            type: Boolean,
            default: false
        },
        iscomplete: {
            type: Boolean,
            default: false
        },

    },
    { timestamps: true }
)

module.exports = mongoose.model('Note', noteSchema, 'notes-app')
