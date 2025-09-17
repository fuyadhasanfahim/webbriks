import { model, models, Schema } from 'mongoose';

const applicantSchema = new Schema(
    {
        jobId: {
            type: Schema.Types.ObjectId,
            ref: 'Job',
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        documentUrl: {
            type: String,
            required: true,
        },
        documentPublicID: {
            type: String,
            required: true,
        },
        coverLetter: String,
        portfolioUrl: String,
        socials: {
            facebook: String,
            linkedin: String,
        },
        experience: [
            {
                company: {
                    type: String,
                    required: true,
                },
                role: {
                    type: String,
                    required: true,
                },
                startDate: {
                    type: Date,
                    required: true,
                },
                endDate: Date,
                currentlyWorking: {
                    type: Boolean,
                    default: false,
                },
                description: String,
            },
        ],
        status: {
            type: String,
            enum: ['applied', 'shortlisted', 'interview', 'hired', 'rejected'],
            default: 'applied',
        },
        notes: String,
    },
    {
        timestamps: true,
    }
);

const ApplicantModel = models?.Applicant || model('Applicant', applicantSchema);
export default ApplicantModel;
