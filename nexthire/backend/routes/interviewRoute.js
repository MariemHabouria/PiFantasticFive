const express = require('express');
const User = require('../models/user'); // Ensure correct path to your User model

const router = express.Router();

// Get all interview meetings
router.get('/interviews', async(req, res) => {
    try {
        // Find all users with scheduled interviews
        const usersWithInterviews = await User.find({ 'interviews.0': { $exists: true } }, // Users who have at least one interview
            { interviews: 1, email: 1, profile: 1, picture: 1 }
        );

        // Transform data to match frontend expectations
        const meetings = usersWithInterviews.flatMap((user) =>
            (user.interviews || []).map((interview) => ({
                id: interview._id,
                candidate: {
                    name: user.email, // Use email as name (or add a name field to your schema)
                    designation: (user.profile && user.profile.experience && user.profile.experience[0] && user.profile.experience[0].title) || "N/A", // Avoid optional chaining
                    picture: user.picture || "https://via.placeholder.com/80", // Use profile picture or fallback
                },
                date: (interview.date && interview.date.$date) || interview.date, // Use the interview date
                jobId: interview.jobId, // Use the job ID
                status: interview.status, // Use the interview status
                meeting: {
                    type: (interview.meeting && interview.meeting.type) || "N/A", // Avoid optional chaining
                    attendees: (interview.meeting && interview.meeting.attendees) || "N/A", // Avoid optional chaining
                },
            }))
        );

        res.json(meetings); // Return the transformed meeting list
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle errors
    }
});

module.exports = router;