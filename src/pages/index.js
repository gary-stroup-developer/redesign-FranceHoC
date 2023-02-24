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
      <main className='main'>
      <Carousel className="carousel my-5" centerMode={true} autoPlay={true} infiniteLoop={true}>
          <div>
              <img
                className="carouselImg" 
                src="/images/carousel1.jpeg"
                alt="a plate of strawberry crepes and a plate of turkish crepes"
              />
              <p className="legend">Strawberry Crepe</p>
          </div>
          <div>
              <img
                className="carouselImg"
                src="/images/carousel2.png"
                alt="a plate of strawberry crepes and a plate of turkish crepes"
              />
              <p className="legend">Turkish Crepe</p>
          </div>
          <div>
              <img
                className="carouselImg"
                src="/images/carousel3.png"
                alt="a hazelnut latte with cool design"
              />
              <p className="legend">Hazelnut Latte</p>
          </div>
          <div>
              <img
                className="carouselImg"
                src="/images/carousel4.png"
                alt="a family breakfast with a latte, hot chocolate,and two plates of turkish crepes"
              />
              <p className="legend">Family Breakfast</p>
          </div>
          <div>
              <img
                className="carouselImg"
                src="/images/carousel5.png"
                alt="a cappucino with musical note design"
              />
              <p className="legend">Cappucino</p>
          </div>
      </Carousel>
      </main>
      <div>
        <div className='border border-red-600 h-1 bg-red-600 w-full'></div>
        <h1 className="text-blue-900 text-4xl my-2 ml-4">Welcome to France House of Crepes! </h1>
        <div className='border border-red-600 h-1 bg-red-600 w-full'></div>
      </div>
      <div className=" mt-10 grid grid-cols-6 grid-rows-4">
        <div className="row-start-1">
          <Image
          className='img' 
          src="/images/homepage-coffee.webp"
          alt="coffee"
          width={400}
          height={400}
          />
          <p>Start your day with our Pio-Pio Omelette and a Latte.</p>
        </div>
        <div className="row-start-3">
          <Image
          className='img' 
          src="/images/homepage-omelette.webp"
          alt="coffee"
          width={400}
          height={400}
          />
        </div>
        <div className="row-start-4">
          <Image
          className='img' 
          src="/images/homepage-drinks.webp"
          alt="coffee"
          width={400}
          height={400}
          />
        </div>
        <p className="quote row-start-2 col-start-2 col-span-3 row-span-2">
        "This is the place for both sweet and savory crepes, which are absolutely delicious. 
        The striking flavors will take those of you who have visited France back to the shores of 
        Brittany and the arrondissements of the City of Light. The strains of French love songs waft 
        through the air to enhance the ambiance. . . a unique dining experience that when the food arrives 
        will calm the culinary beast in even the hungriest, most finicky patron 
        — an experience to be savored and lingered over." - David Cohen, Food Critic
        </p>
        <div className=" flex justify-center grow-0 shrink col-start-5 col-span-2 row-start-1 row-span-2">
          <Image
          className='img'
          src="/images/homepage-owner.webp"
          alt="France House of Crepes owner holding omelette dish"
          width={400}
          height={400}
        />
        </div>
          
        <div className='text-blue-900 text-lg font-bold row-start-4 col-start-2 col-span-3'>
        <p>New Happy Hour</p>
        <p>Daily From 2 to 7 PM,</p>
        <p>New Daily Specials Served All Day </p>
        <p>& Our Breakfast Special is Back!</p> 
        </div>
      </div>
    </>
  )
}
