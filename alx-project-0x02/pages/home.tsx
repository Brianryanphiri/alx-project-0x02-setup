import type { NextPage } from 'next';
import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the content of the first card.' },
    { title: 'Card 2', content: 'Here is some more content in the second card.' },
    { title: 'Card 3', content: 'The third card has this content.' },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen justify-center bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">This is the Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-6"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
    </div>
  );
};

export default Home;
