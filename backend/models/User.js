const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        phone: {
            country_code: { type: Number, required: true },
            number: { type: String, required: true },
            is_verified: { type: Boolean },
        },
        bio: { type: String },
        display_image_url: { type: String },
        status: [
            {
                imageUrl: { type: String },
                timestamp: { type: Date },
            },
        ],
        groupIds: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
        dmIds: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
