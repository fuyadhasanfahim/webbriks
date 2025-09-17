import JobModel from '@/models/job.model';
import connectToDatabase from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        await connectToDatabase();

        const { id } = params;

        if (!id) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Job ID is required.',
                },
                { status: 400 }
            );
        }

        const job = await JobModel.findById(id).lean();

        if (!job) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'No job found with this ID.',
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                job,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching job:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch job',
                error: error.message,
            },
            { status: 500 }
        );
    }
}
