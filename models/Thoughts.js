const { Schema, Types } = require("mongoose");

const thoughtsSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtName: {
      type: String,
      required: true,
      maxlength: 250,
      minlength: 1,
      default: "Share a thought",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtsSchema;
