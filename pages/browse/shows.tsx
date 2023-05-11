import Head from 'next/head'
import Header from '@/components/Header'

export default function Shows(){
    return (
        <div className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]`}>
            <Head>
                <title>
                    {`TV Shows - Nextflix`} 
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <div className="w-full h-full">
                    <h1 className="flex items-center justify-center h-screen md:text-9xl">TV Shows</h1>
                </div>
            </main>
        </div>      
    )
}