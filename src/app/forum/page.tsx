import Link from "next/link";
import { forumThreads } from "@/data/forumThreads";

export default function ForumPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Forum</h1>
          <Link
            href="/forum/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            New Thread
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thread
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Replies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forumThreads.map((thread) => (
                <tr key={thread.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/forum/${thread.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {thread.title}
                    </Link>
                    <div className="text-sm text-gray-500">{thread.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {thread.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {thread.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {thread.replies}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {thread.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/forum/new"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Start a new discussion →
          </Link>
        </div>
      </div>
    </div>
  );
}
