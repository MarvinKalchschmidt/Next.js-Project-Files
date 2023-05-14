import Image from "next/image"
import AccountImage from "@/components/AccountImage"
import Link from "next/link"
import Head from "next/head"

const Profiles = () => {
    const account1 = "Marvin"
    const account2 = "Vivi"
    const account3 = "Caro"

    return (
        <main className="h-screen">     
            <Head>
                <title>
                    {"Accounts - Nextflix"} 
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="absolute px-4 pt-[18px] lg:px-16 top-0 left-0">
                <Link href="/">
                    <Image
                      src="/nextflix.png"
                      alt="Nextflix logo"
                      width={100}
                      height={27.35}
                      className="cursor-pointer object-cover"
                    />
                </Link>
            </div>

            <div className="flex flex-col h-screen justify-center items-center"> 
               
                {/*TODO Exercise 4: Add TailwindCSS here*/}              
                <div className="text-center pb-10 md:pb-20 text-3xl md:text-5xl">Who's watching?</div>
                {/*TODO Exercise 4: Add TailwindCSS here*/} 
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12" >
                    <AccountImage name={account1} />
                    <AccountImage name={account2} />
                    <AccountImage name={account3} />
                </div>  
            </div>   
        </main>
    )
}

export default Profiles