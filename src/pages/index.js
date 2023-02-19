import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>France House of Crepes Redesign</title>
        <meta name="description" content="France House of Crepes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <Carousel className="carousel my-5 bg-slate-400" centerMode={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img 
                      src="/images/carousel1.jpeg"
                      alt="a plate of strawberry crepes and a plate of turkish crepes"
                    />
                    <p className="legend">Strawberry Crepe</p>
                </div>
                <div>
                    <img
                      src="/images/carousel2.png"
                      alt="a plate of strawberry crepes and a plate of turkish crepes"
                    />
                    <p className="legend">Turkish Crepe</p>
                </div>
                <div>
                    <img
                      src="/images/carousel3.png"
                      alt="a hazelnut latte with cool design"
                    />
                    <p className="legend">Hazelnut Latte</p>
                </div>
                <div>
                    <img
                      src="/images/carousel4.png"
                      alt="a family breakfast with a latte, hot chocolate,and two plates of turkish crepes"
                    />
                    <p className="legend">Family Breakfast</p>
                </div>
                <div>
                    <img
                      src="/images/carousel5.png"
                      alt="a cappucino with musical note design"
                    />
                    <p className="legend">Cappucino</p>
                </div>
            </Carousel>
      </main>
    </>
  )
}
