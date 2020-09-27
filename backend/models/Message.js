const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        message: String,
        name: String,
        received: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
