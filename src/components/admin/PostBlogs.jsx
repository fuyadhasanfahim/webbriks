'use client';

import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function PostBlogs() {
    const [title, setTitle] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !thumbnailImage || !content) {
            alert('Please fill in all required fields.');
            return;
        }

        const blogData = new FormData();
        blogData.append('title', title);
        blogData.append('thumbnailImage', thumbnailImage);
        blogData.append('content', content);

        console.log('Blog Data:', {
            title,
            thumbnailImage,
            content,
        });

        setTitle('');
        setThumbnailImage(null);
        setContent('');
    };

    return (
        <div className="p-4 w-full bg-white">
            <h1 className="text-xl font-bold mb-4">Post a New Blog</h1>
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between gap-10">
                    <div className="w-full">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter the blog title"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="thumbnailImage"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Upload Image for Thumbnail
                        </label>
                        <input
                            type="file"
                            name="thumbnailImage"
                            id="thumbnailImage"
                            onChange={(e) =>
                                setThumbnailImage(e.target.files[0])
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                            accept="image/*"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Editor
                        apiKey="k6l1skohbqvd2cxwnpjh3xhx878zo29v4p99ouu80161l7oc"
                        value={content}
                        onEditorChange={(newContent) => setContent(newContent)}
                        init={{
                            plugins: [
                                'anchor',
                                'autolink',
                                'charmap',
                                'codesample',
                                'emoticons',
                                'image',
                                'link',
                                'lists',
                                'media',
                                'searchreplace',
                                'table',
                                'visualblocks',
                                'wordcount',
                                'checklist',
                                'mediaembed',
                                'casechange',
                                'export',
                                'formatpainter',
                                'pageembed',
                                'a11ychecker',
                                'tinymcespellchecker',
                                'permanentpen',
                                'powerpaste',
                                'advtable',
                                'advcode',
                                'editimage',
                                'advtemplate',
                                'mentions',
                                'tinycomments',
                                'tableofcontents',
                                'footnotes',
                                'mergetags',
                                'autocorrect',
                                'typography',
                                'inlinecss',
                                'markdown',
                                'importword',
                                'exportword',
                                'exportpdf',
                            ],
                            toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                        }}
                        required
                    />
                </div>

                <div className="w-full flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-[#ffa726] text-white px-4 py-2 rounded-md"
                    >
                        Post Blog
                    </button>
                </div>
            </form>
        </div>
    );
}
