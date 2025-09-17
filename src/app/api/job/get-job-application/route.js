import connectToDatabase from '@/lib/mongodb';
import ApplicantModel from '@/models/applicant.model';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await connectToDatabase();

        // Extract _id from query string
        const { searchParams } = new URL(req.url);
        const _id = searchParams.get('_id');

        if (!_id) {
            return NextResponse.json(
                { success: false, message: 'Missing application ID' },
                { status: 400 }
            );
        }

        const application = await ApplicantModel.findById(_id).lean();

        if (!application) {
            return NextResponse.json(
                { success: false, message: 'Application not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: application,
        });
    } catch (error) {
        console.error('Error fetching application:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch application',
                error: error.message,
            },
            { status: 500 }
        );
    }
}
