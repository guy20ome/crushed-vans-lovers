import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="h-96 flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://mistralaichatupprodswe.blob.core.windows.net/chat-images/c5/ad/5b/c5ad5b20-4311-4bb4-963d-db9515bb419b/7525dad5-e234-4182-aaac-b83027b32e76/72bbb03d-72d8-4a20-8dfc-85c487a1cc70?sv=2025-01-05&spr=https&se=2026-07-14T16%3A19%3A44Z&skoid=c9baccad-3639-4379-a088-07b7e349293c&sktid=4fbc1168-2984-4d17-af19-ac5138c2378e&skt=2026-07-14T15%3A19%3A44Z&ske=2026-07-14T16%3A19%3A44Z&sks=b&skv=2025-01-05&sr=b&sp=r&sig=dFNRGH0Yz2X9pc9AqP3ipgIIYj7glAyslcI%2B9gR5AjM%3D')",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Crushed Converse Lovers</h1>
          <p className="text-xl mb-8">
            A community for sneaker enthusiasts who love walking in crushed Converse without the heel. 
            Share your passion, style tips, and connect with fellow lovers of this unique trend.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/articles"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Read Articles
            </Link>
            <Link
              href="/forum"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Join the Forum
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl mb-8">
            Share your experiences, ask questions, and connect with fellow crushed Converse enthusiasts from around the world.
          </p>
          <Link
            href="/forum"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
