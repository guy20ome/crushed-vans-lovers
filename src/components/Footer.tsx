import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Crushed Converse Lovers</h3>
            <p className="text-gray-400">
              A community for sneaker enthusiasts who love walking in crushed Converse without the heel. 
              Share your passion, style tips, and connect with fellow lovers of this unique trend.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-400 hover:text-white">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles?category=DIY Modifications"
                  className="text-gray-400 hover:text-white"
                >
                  DIY Modifications
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=Styling Tips"
                  className="text-gray-400 hover:text-white"
                >
                  Styling Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=Culture & History"
                  className="text-gray-400 hover:text-white"
                >
                  Culture & History
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=Comfort Hacks"
                  className="text-gray-400 hover:text-white"
                >
                  Comfort Hacks
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=Sneaker Care"
                  className="text-gray-400 hover:text-white"
                >
                  Sneaker Care
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=Where to Buy"
                  className="text-gray-400 hover:text-white"
                >
                  Where to Buy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Crushed Converse Lovers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
