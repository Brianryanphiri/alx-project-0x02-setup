import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { User } from '@/interfaces';

interface UsersPageProps {
  users: User[];
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-green-50 p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Users</h1>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
