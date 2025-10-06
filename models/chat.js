// models/Chat.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    adId: { type: Schema.Types.ObjectId, ref: 'Ad', required: true },
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Kim ki, söhbətə başlayıb
    recipientId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Kim ki, alacaq
    adTitle: String,
    messages: [
        {
            senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
        }
    ],
}, {
    timestamps: true
});

// KRİTİK QEYDİYYAT
const Chat = mongoose.models.Chat || mongoose.model('Chat', ChatSchema);

module.exports = Chat;