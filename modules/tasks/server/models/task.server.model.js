'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Task name',
        trim: true
    },
    description: {
        type: String
    },
    deadline: {
        type: Date
    },
    type: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Task', TaskSchema);