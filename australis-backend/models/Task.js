const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    dateNow: {
      type: Object,
      default: new Date().toLocaleDateString(),
    },
    title: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    status: {
      type: String,
      enum: ['notStarted', 'inProgress', 'paused', 'completed'],
      default: 'notStarted',
    },
    timeIntervals: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'TimeInterval',
      default: [],
    },
    timeTook: {
      type: String,
      default: '0h 0m 0s',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
