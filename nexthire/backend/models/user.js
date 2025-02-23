const mongoose = require('mongoose');

// Check if the model is already defined to avoid overwriting it
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdDate: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    permissions: {
        canManageUsers: Boolean,
        canControlPermissions: Boolean,
        canOverseeSystem: Boolean,
    },
    verificationStatus: {
        status: String,
        updatedDate: Date,
        reason: String,
    },
    enterprise: {
        name: String,
        industry: String,
        location: String,
        website: String,
        description: String,
        employeeCount: Number,
    },
    jobsPosted: [{
        jobId: String,
        title: String,
        status: String,
        createdDate: Date,
    }],
    profile: {
        resume: String,
        skills: [String],
        availability: String,
        experience: [{
            title: String,
            company: String,
            duration: String,
            description: String,
        }],
    },
    applications: [{
        jobId: String,
        enterpriseId: String,
        status: String,
        dateSubmitted: Date,
        notes: String,
    }],
    interviews: [{
        jobId: String,
        enterpriseId: String,
        date: Date,
        status: String,
        meeting: {
            type: String,
            link: String,
            details: String,
        },
        feedback: {
            rating: Number,
            comments: String,
        },
    }],
});

// Avoid overwriting the model if it's already defined
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);