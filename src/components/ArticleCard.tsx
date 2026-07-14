import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}></div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
            {article.category}
          </span>
          <span>{article.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/articles/${article.slug}`} className="hover:text-blue-600">
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-2">By {article.author}</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
