import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const linkClass = (path: string) =>
    `mr-4 hover:underline ${router.pathname === path ? 'underline font-bold' : ''}`;

  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4 items-center">
      <h1 className="text-xl font-semibold flex-grow">ALX Project Header</h1>
      <nav>
        <Link href="/home">
          <a className={linkClass('/home')}>Home</a>
        </Link>
        <Link href="/about">
          <a className={linkClass('/about')}>About</a>
        </Link>
        <Link href="/posts">
          <a className={linkClass('/posts')}>Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
