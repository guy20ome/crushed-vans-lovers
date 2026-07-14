import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: `url('${article.image}')` }}
          ></div>
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                {article.category}
              </span>
              <span className="mr-4">{article.date}</span>
              <span className="mr-4">By {article.author}</span>
              <span>{article.readTime} min read</span>
            </div>
            <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
            <div
              className="prose lg:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
