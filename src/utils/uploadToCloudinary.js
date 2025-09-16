import cloudinary from '@/lib/cloudinary';

export const uploadToCloudinary = async (filePath, originalFilename) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'raw',
            folder: 'job-applications/cvs',
            public_id: `${originalFilename}`,
            use_filename: true,
            unique_filename: true,
        });
        return result;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Failed to upload CV to cloud storage');
    }
};
