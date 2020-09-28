const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema(
    {
        userid: { type: Schema.Types.ObjectId, ref: 'User' },
        groupid: { type: Schema.Types.ObjectId, ref: 'Group' },
        roles: [{ type: String }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Member', memberSchema);
