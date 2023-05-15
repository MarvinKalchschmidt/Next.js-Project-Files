import Image from "next/image"
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
      <div className="m-auto relative h-32 lg:h-40 aspect-square hover:scale-110 duration-200 ease-in"
        onClick={() => {
          setCurrentAccount(name)
        }}>
        <Link href="/">
          <Image className='rounded-lg object-cover'
            fill
            src={'/' + name + '.png'}
            alt={'Image of ' + name}
          />
        </Link>
      </div>
      <p className="text-lg text-center my-5">{name}</p>
    </div>
  )
}

export default AccountImage