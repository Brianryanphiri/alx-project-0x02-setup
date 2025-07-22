// pages/posts.tsx
import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Posts</h1>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Map the data to match the PostProps interface (content = body)
    const posts: PostProps[] = data.map((post: any) => ({
      userId: post.userId,
      title: post.title,
      content: post.body,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
