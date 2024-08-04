import React from "react";

interface PostProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
}

const PostPanel: React.FC<PostProps> = ({
  username,
  handle,
  content,
  timestamp,
  likes,
  reposts,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${username}`}
          alt={`${username}'s avatar`}
        />
        <div>
          <h3 className="font-bold text-lg">{username}</h3>
          <p className="text-gray-300">@{handle}</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="text-gray-200 mb-2">{timestamp}</div>
      <div className="flex justify-between text-gray-300">
        <span>{likes} Likes</span>
        <span>{reposts} reposts</span>
      </div>
    </div>
  );
};

export default PostPanel;
