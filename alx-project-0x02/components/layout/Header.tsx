import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <h1 className="text-xl font-semibold flex-grow">ALX Project Header</h1>
      <nav>
        <Link href="/home">
          <a className="mr-4 hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
