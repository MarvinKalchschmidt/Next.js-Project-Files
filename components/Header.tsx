import Image from 'next/image'
import Link from 'next/link'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { accountState } from "atoms/accountStateAtom"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const accountName = useRecoilValue(accountState)

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
      <div className="flex items-center md:space-x-10">

      <Link href="/">
        <Image
          src="/nextflix.png"
          alt="Nextflix logo"
          width={100}
          height={27.35}
          className="cursor-pointer object-cover"
        />
      </Link>
      
        <ul className="hidden space-x-4 md:flex">
          {/*TODO Exercise 3: Add <Link> component to <li> with href to the newly created pages (href={"/browse/pageFileName"}*/}
          <li className="headerLink cursor-default font-semibold text-white hover:text-white"><Link href={"/"}>Home</Link></li>
          <li className="headerLink"><Link href={"/browse/shows"}>TV Shows</Link></li>
          <li className="headerLink"><Link href={"/browse/movies"}>Movies</Link></li>
          <li className="headerLink"><Link href={"/browse/latest"}>New & Popular</Link></li>
          <li className="headerLink"><Link href={"/browse/list"}>My List</Link></li>
        </ul>
      </div>
      <div className="flex items-center space-x-5 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />

        {/*TODO Exercise 3 Bonus: Wrap <Link> component around <Image> component with href to newly created accounts page (also use pageTemplate for that, href={"/accounts"})*/}
        <Link href="/accounts">
          <Image
            src={'/' + accountName + '.png'}
            className="cursor-pointer rounded"
            width={32}
            height={32}
            alt={'Account image'}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
