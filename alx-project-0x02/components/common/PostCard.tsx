import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white max-w-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
