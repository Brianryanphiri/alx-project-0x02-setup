import type { NextPage } from 'next';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-yellow-100 p-4">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">This is the About Page</h1>

        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </>
  );
};

export default About;
