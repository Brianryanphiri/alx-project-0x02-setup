import type { NextPage } from 'next';
import Card from '../components/common/Card';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center gap-6 min-h-screen justify-center bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-8">This is the Home Page</h1>

      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here is some more content in the second card." />
      <Card title="Card 3" content="The third card has this content." />
    </div>
  );
};

export default Home;
