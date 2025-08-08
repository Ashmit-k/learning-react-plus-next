
import { blogDetails } from "@/data/blogs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog List</h1>
      <ul className="space-y-4">
        {blogDetails.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <Link href={`/blog/${blog.id}`} className="text-blue-500 underline">
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
