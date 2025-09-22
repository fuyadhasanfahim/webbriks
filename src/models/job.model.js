import { model, models, Schema } from 'mongoose';

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        datePosted: { type: Date, required: true },
        vacancies: {
            type: Number,
            required: true,
        },
        hasLogo: {
            type: Boolean,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        notes: String,
        salary: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
            required: true,
        },
        employmentStatus: {
            type: String,
            required: true,
        },
        workplace: {
            type: String,
            required: true,
        },
        responsibilities: {
            type: [String],
            required: true,
        },
        requirements: {
            type: [String],
            required: true,
        },
        compensation: {
            type: [String],
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        apply: {
            email: { type: String, required: true },
            subject: { type: String, required: true },
        },
        expireAt: {
            type: Date,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const JobModel = models?.Job || model('Job', jobSchema);
export default JobModel;
