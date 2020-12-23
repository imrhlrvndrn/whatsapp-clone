const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        privatedmid: { type: Schema.Types.ObjectId, ref: 'PrivateDm' },
        groupid: { type: Schema.Types.ObjectId, ref: 'Group' },
        userid: { type: Schema.Types.ObjectId, ref: 'User' },
        forward_count: { type: Number, required: true, default: 0 },
        message: String,
        name: String,
        received: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
