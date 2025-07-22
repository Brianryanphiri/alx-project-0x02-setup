import type { NextPage } from 'next'
import { Button } from '@/components/common/Button'

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-yellow-100 p-4">
      <h1 className="text-4xl font-bold text-yellow-700 mb-6">This is the About Page</h1>

      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
  )
}

export default About

