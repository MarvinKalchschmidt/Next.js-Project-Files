import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Element } from "typings"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type MovieData = {  
    videos: any
    [key: string]: any;  
}

export default function Movie({movieData}: MovieData) { 
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

  const getUrlTag = (data: MovieData) => { 
    const index = data.videos.results.findIndex((element: Element) => element.type === 'Trailer')
    return data.videos.results[index]?.key
  }
 
  return (
      <div className={`h-screen`}>   

        <Head>
          <title>
              {`${movieData?.title || 'Home'} - Nextflix`} 
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Nextflix Movie Page"/>
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

        <div className="flex flex-col items-center justify-center h-full pt-16">   
          <div className="w-[80%] aspect-video">              
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${getUrlTag(movieData)}`}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: 'cover'}}
                playing={true}
                controls
                muted={true}
            />
          </div>
        </div>          
      </div>  
    )
}

export const getServerSideProps = async (context: any) => {
  const movieID = context.query.id;
  const fetchRequest = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
  const data = await fetch(fetchRequest).then((response) => response.json())
    
  return {
    props: { movieData: data }    
  }    
}