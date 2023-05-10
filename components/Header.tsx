import Image from 'next/image'
import Link from 'next/link'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`h-16 py-0 ${isScrolled && 'bg-backgroundGray'} lg:px-16 `}>
      <div className="flex items-center space-x-2 md:space-x-10">      

        <Image
          src="/nextflix.png"
          alt="Nextflix logo"            
          width={100}       
          height={0}
          className="cursor-pointer object-cover"
        />
       
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">Home</li>
          <li className="headerLink"><Link href={""}>TV Shows</Link></li>
          <li className="headerLink"><Link href={""}>Movies</Link></li>
          <li className="headerLink"><Link href={""}>New & Popular</Link></li>
          <li className="headerLink"><Link href={""}>My List</Link></li>
        </ul>
      </div>
      <div className="flex items-center space-x-5 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />      
        <Image
          src="/account.png"
          className="cursor-pointer rounded"
          width={32}
          height={32}
          alt={'Account image'}          
        />
      </div>
    </header>
  )
}

export default Header
