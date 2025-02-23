const express = require('express');
const User = require('../models/user'); // Ensure correct path to your User model

const router = express.Router();

// Get all jobs from enterprises
router.get('/jobs', async(req, res) => {
    try {
        // Find all users with role "ENTERPRISE" and extract jobsPosted
        const enterprises = await User.find({ role: "ENTERPRISE" }, { jobsPosted: 1 });

        // Find all candidates to count the number of applicants for each job
        const candidates = await User.find({ role: "CANDIDATE" }, { applications: 1 });

        // Create a map to count applicants for each job
        const applicantCountMap = new Map();
        candidates.forEach(candidate => {
            candidate.applications.forEach(application => {
                const jobId = application.jobId;
                if (applicantCountMap.has(jobId)) {
                    applicantCountMap.set(jobId, applicantCountMap.get(jobId) + 1);
                } else {
                    applicantCountMap.set(jobId, 1);
                }
            });
        });

        // Transform the data to return a structured job list with applicant count
        const jobs = enterprises.flatMap(enterprise =>
            (enterprise.jobsPosted || []).map(job => ({
                _id: job.jobId, // Use jobId as _id for compatibility with frontend
                title: job.title, // Job title
                applicants: applicantCountMap.get(job.jobId) || 0, // Number of applicants
            }))
        );

        res.json(jobs); // Return the list of jobs
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle errors
    }
});

module.exports = router;