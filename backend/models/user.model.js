const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        is_2FA_activated: { type: Boolean },
        bio: { type: String, default: '' },
        avatar: {
            type: String,
            required: true,
            default:
                'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
        // groupids: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
        // privatedmids: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    },
    { timestamps: true }
);

module.exports = model('User', userSchema);
