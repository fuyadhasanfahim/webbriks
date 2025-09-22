export const dynamic = 'force-dynamic';

import connectToDatabase from '@/lib/mongodb';
import ApplicantModel from '@/models/applicant.model';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await connectToDatabase();

        const _id = req.nextUrl.searchParams.get('_id');

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
