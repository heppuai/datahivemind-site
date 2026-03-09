import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Datahivemind",
  description:
    "Practical guides on software development costs, working with developers, and building your first product.",
  openGraph: {
    title: "Blog — Datahivemind",
    description:
      "Practical guides on software development costs, working with developers, and building your first product.",
    type: "website",
    url: "https://datahivemind.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-[var(--muted)] text-lg mb-12">
            Practical guides on costs, planning, and building software.
          </p>
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 transition hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/5">
                  <time className="text-sm text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
