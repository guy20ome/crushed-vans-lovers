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
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Crushed Vans Lovers</h1>
          <p className="text-xl mb-8">
            A community for van enthusiasts who walk without heels. Share your
            passion, modify your vans, and explore the world together.
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
            Share your experiences, ask questions, and connect with fellow van
            enthusiasts from around the world.
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
