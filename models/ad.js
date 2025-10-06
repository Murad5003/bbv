// models/Ad.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    // ... bütün elan sahələriniz (title, description, price, vs.)
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    adCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    // ... digər sahələr
    bids: [
        {
            userId: { type: Schema.Types.ObjectId, ref: 'User' },
            user: String,
            amount: Number,
            timestamp: { type: Date, default: Date.now },
        },
    ],
    // ... digər sahələr
}, {
    timestamps: true
});

// KRİTİK QEYDİYYAT
const Ad = mongoose.models.Ad || mongoose.model('Ad', AdSchema);

module.exports = Ad;