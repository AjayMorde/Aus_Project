const mongoose = require('mongoose');

const timeIntervalSchema = mongoose.Schema(
  {
    time_start: {
      type: Number,
      required: true,
    },
    time_end: {
      type: Number,
      required: false,
    },
    time_total: {
      type: Number,
    },
    task_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('TimeInterval', timeIntervalSchema);
