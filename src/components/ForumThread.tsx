import Link from "next/link";
import { ForumThread as ForumThreadType } from "@/data/forumThreads";

interface ForumThreadProps {
  thread: ForumThreadType;
}

export default function ForumThread({ thread }: ForumThreadProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">
            <Link
              href={`/forum/${thread.id}`}
              className="hover:text-blue-600"
            >
              {thread.title}
            </Link>
          </h3>
          <p className="text-gray-600">{thread.content}</p>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <span className="mr-4">By {thread.author}</span>
        <span className="mr-4">{thread.date}</span>
        <span className="mr-4">
          <i className="far fa-comment mr-1"></i> {thread.replies} Replies
        </span>
        <span>
          <i className="far fa-eye mr-1"></i> {thread.views} Views
        </span>
        <span className="ml-auto">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {thread.category}
          </span>
        </span>
      </div>
    </div>
  );
}
