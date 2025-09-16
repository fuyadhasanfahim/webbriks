import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true,
        },
        position: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: function () {
                return !this.currentlyWorking;
            },
        },
        currentlyWorking: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
            trim: true,
        },
    },
    { _id: false }
);

const JobApplicationSchema = new mongoose.Schema(
    {
        // Personal Information
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        v
                    );
                },
                message: 'Please enter a valid email address',
            },
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },

        // Job Information
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            required: true,
        },
        jobTitle: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },

        // CV Information
        cvUrl: {
            type: String,
            required: true,
        },
        cvPublicId: {
            type: String,
            required: true, // For Cloudinary deletion if needed
        },

        // Experience Information
        hasExperience: {
            type: Boolean,
            required: true,
        },
        experiences: {
            type: [ExperienceSchema],
            validate: {
                validator: function (v) {
                    return (
                        !this.hasExperience ||
                        (this.hasExperience && v.length > 0)
                    );
                },
                message:
                    'At least one experience is required when hasExperience is true',
            },
        },

        // Cover Letter
        coverLetter: {
            type: String,
            trim: true,
        },

        // Application Status
        status: {
            type: String,
            enum: ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'],
            default: 'pending',
        },

        // Metadata
        appliedAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Index for better query performance
JobApplicationSchema.index({ email: 1, jobId: 1 }, { unique: true }); // Prevent duplicate applications
JobApplicationSchema.index({ jobId: 1 });
JobApplicationSchema.index({ status: 1 });
JobApplicationSchema.index({ appliedAt: -1 });

// Update the updatedAt field before saving
JobApplicationSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

// Virtual for full name
JobApplicationSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Method to check if application is recent (within 30 days)
JobApplicationSchema.methods.isRecent = function () {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return this.appliedAt >= thirtyDaysAgo;
};

export default mongoose.models?.JobApplication ||
    mongoose.model('JobApplication', JobApplicationSchema);
