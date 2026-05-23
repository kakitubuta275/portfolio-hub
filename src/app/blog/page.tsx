import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border p-5">
            <p className="text-sm text-zinc-500">{post.date}</p>
            <h2 className="mt-1 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-zinc-600">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}