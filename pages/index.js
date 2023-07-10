import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import FeaturedCard from '@/components/FeaturedCard'
import Feed from '../components/Feed'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <NavBar/>
      <FeaturedCard/>
      <section className='absolute md:mt-[10%]  lg:mt-[10%] w-full'>
       <Feed/>
      </section>


    </div>
  )
}
