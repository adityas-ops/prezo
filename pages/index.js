import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='md:mt-[80px] mt-0'>
  <Hero/>
   </div>
  )
}
