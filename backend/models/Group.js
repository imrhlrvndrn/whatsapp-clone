const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema(
    {
        name: { type: String, required: true },
        memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        bio: { type: String },
        displayImageUrl: { type: String },
        roles: [{ type: String }], // admin, owner, etc
    },
    { timestamps: true }
);

module.exports = mongoose.model('Group', groupSchema);
