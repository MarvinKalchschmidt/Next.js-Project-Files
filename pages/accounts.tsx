import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

/* Related to Exercise 4 */
import AccountImage from "@/components/AccountImage"

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

            <div className="flex flex-col h-screen justify-center mt-28 md:m-0 items-center">
                {/*TODO Exercise 4: Use the existing 'AccountImage' component and tailwindcss utility classes to rebuilt the page as shown in the screenshot. */}
                {/*TODO Exercise 4 Bonus: Use the breakpoint system of tailwindcss to make the page responsive.*/}
                
            </div>
        </main>
    )
}

export default Profiles