import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Datahivemind`,
    description: post.description,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://datahivemind.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition mb-8 inline-block"
          >
            &larr; Back to blog
          </Link>
          <time className="block text-sm text-[var(--muted)] mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            {post.title}
          </h1>
          <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[var(--muted)] prose-p:leading-relaxed prose-li:text-[var(--muted)] prose-strong:text-[var(--foreground)] prose-a:text-[var(--accent-light)] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-left prose-th:text-[var(--foreground)] prose-th:border-[var(--card-border)] prose-td:border-[var(--card-border)] prose-td:text-[var(--muted)] prose-hr:border-[var(--card-border)] prose-blockquote:border-[var(--accent)]">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
