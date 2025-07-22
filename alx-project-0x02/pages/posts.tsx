import type { NextPage } from 'next';
import Header from '@/components/layout/Header';

const Posts: NextPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
        <h1 className="text-4xl font-bold text-blue-700">This is the Posts Page</h1>
      </div>
    </>
  );
};

export default Posts;
