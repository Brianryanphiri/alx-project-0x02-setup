import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await res.json();
        // Map API data to our PostProps format
        const formattedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard key={index} userId={post.userId} title={post.title} content={post.content} />
          ))
        )}
      </div>
    </>
  );
};

export default Posts;
