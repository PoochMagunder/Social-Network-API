const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
  thoughttext: { type: String, required: true, maxLength: 280, minLength: 1 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: ['reaction'],
},
{
  toJSON: {
    getters: true,
  },
  id: false,
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})


const Thought = model('thought', thoughtSchema);

module.exports = Thought;