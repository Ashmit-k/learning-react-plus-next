'use client';

import { blogDetails } from '@/data/blogs';
import { useParams, useRouter } from 'next/navigation';

export default function BlogDetail() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;

    // Convert string id to number for comparison
    const blog = blogDetails.find((b) => b.id === id);

    if (!blog) return <div className="p-8">Loading or blog not found...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="mt-4 text-gray-700">{blog.content}</p>
            <button onClick={() => router.back()} className="mt-6 text-blue-500 underline cursor-pointer">
                ← Go back
            </button>
        </div>
    );
}
