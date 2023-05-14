import Image
  from "next/image"
import Link from "next/link";
import { accountState } from "atoms/accountStateAtom"
import { useSetRecoilState } from 'recoil'

interface Props {
  name: string
}

function AccountImage({ name }: Props) {

  const setCurrentAccount = useSetRecoilState(accountState)

  return (
    <div>
      <div
        className="m-auto relative w-[160px] h-28 sm:w-[80px] sm:h-20 md:h-32 md:w-[140px] lg:h-40 lg:w-[180px] cursor-pointer md:hover:scale-105 duration-200 "
        onClick={() => {
          setCurrentAccount(name)
        }}>
        <Link href="../">
          <Image className='rounded-lg'
            fill
            src={'/' + name + '.png'}
            alt={'Image of ' + name}
          /></Link>
      </div>
      <p className="text-center mt-5">{name}</p>
    </div>
  )
}

export default AccountImage