const mongoose = require('mongoose');

// Mongoose Scheması
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

// Modeli Mongoose-a qeyd edir və onu export edir.
// mongoose.models.User nəzarət edir ki, model artıq mövcuddurmu.
// MissingSchemaError-dan qaçmaq üçün bu kritiktir.
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;