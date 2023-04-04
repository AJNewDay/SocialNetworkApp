const { Schema, Types } = require("mongoose");

const reactionsSchema = new Schema(
  {
    reactionsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reaction1: {
      id: reaction1,
      type: button,
      value: "Like",
      onclick: "alert('You liked this thought.')",
    },
    reaction2: {
      id: reaction2,
      type: button,
      value: "Dislike",
      onclick: "alert('Seems you have a promlem with this thought.')",
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionsSchema;
