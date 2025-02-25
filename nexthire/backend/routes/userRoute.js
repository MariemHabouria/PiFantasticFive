const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt"); // For password hashing

// Get all users
router.get("/users", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving users", error: err.message });
    }
});

// Get single user by ID
router.get("/users/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Error fetching user", error: err.message });
    }
});

// Create new user
router.post("/users", async(req, res) => {
    try {
        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: "Failed to create user", error: err.message });
    }
});

// Update user by ID
router.put("/users/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: "Failed to update user", error: err.message });
    }
});

// Delete user by ID
router.delete("/users/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete user", error: err.message });
    }
});

// Change password
router.post("/change-password", async(req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify the current password
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error changing password", error: err.message });
    }
});

// Get approved candidates
router.get('/approved-candidates', async(req, res) => {
    try {
        // Fetch all candidates with approved applications
        const candidates = await User.find({ role: 'CANDIDATE', 'applications.status': 'APPROVED' }, // Filter for candidates with approved applications
            { name: 1, email: 1, profile: 1, picture: 1, applications: 1 } // Include the 'name' field
        );

        // Transform data for the frontend
        const approvedCandidates = candidates.flatMap((candidate) =>
            (candidate.applications || [])
            .filter((app) => app.status === 'APPROVED') // Filter for approved applications
            .map((app) => ({
                candidate_name: candidate.name || candidate.email, // Use name if available, otherwise fallback to email
                position: (app.jobTitle) || 'N/A', // Add job title if available
                hiredBy: (app.enterpriseName) || 'N/A', // Add enterprise name if available
                picture: candidate.picture || 'https://via.placeholder.com/80', // Default picture if none provided
            }))
        );

        res.json(approvedCandidates); // Return approved candidates
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle errors
    }
});

module.exports = router;