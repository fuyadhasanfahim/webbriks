import { NextResponse } from 'next/server';
import JobModel from '@/models/job.model';
import connectToDatabase from '@/lib/mongodb';

export async function GET(req) {
    try {
        await connectToDatabase();

        const { searchParams } = req.nextUrl;

        const search = searchParams.get('search') || '';
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const filter = searchParams.get('filter') || undefined;
        const sort = searchParams.get('sort') || 'createdAt';
        const sortOrder = searchParams.get('sortOrder') === 'asc' ? 1 : -1;

        const query = { isActive: true };

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { department: { $regex: search, $options: 'i' } },
                { salary: { $regex: search, $options: 'i' } },
                { employmentStatus: { $regex: search, $options: 'i' } },
                { workplace: { $regex: search, $options: 'i' } },
            ];
        }

        if (filter && filter !== 'all') {
            query.status = filter;
        }

        const skip = (page - 1) * limit;
        const sortBy = { [sort]: sortOrder };

        const [jobs, totalJobs] = await Promise.all([
            JobModel.find(query).sort(sortBy).skip(skip).limit(limit).lean(),
            JobModel.countDocuments(query),
        ]);

        const pagination = {
            total: totalJobs,
            page,
            limit,
            totalPages: Math.ceil(totalJobs / limit),
        };

        if (!jobs) {
            return NextResponse.json(
                { success: false, message: 'No jobs found.' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, jobs, pagination },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : 'Something went wrong!',
            },
            { status: 500 }
        );
    }
}
