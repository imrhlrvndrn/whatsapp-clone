const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        groupId: { type: Schema.Types.ObjectId, ref: 'Group' },
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        forward_count: { type: Number, required: true },
        message: String,
        name: String,
        received: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
