const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
    {
        chatName: { type: String },
        is_group_chat: { type: Boolean, default: false },
        users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        latest_message: { type: Schema.Types.ObjectId, ref: 'Message' },
        group_admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true }
);

module.exports = model('Chat', chatSchema);
