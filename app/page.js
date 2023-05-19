
import Image from 'next/image';
import Link from 'next/link';
import play from '../public/static/google-play.png';
import Head from 'next/head';
import icon from '../public/static/adaptive-icon.png';
export default function Home() {
  
  return (
    <>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={icon} height={25}/>
      <span class="ml-3 text-xl text-white">NoTe</span>
    </a>
  </div>
</header>
<Head>
        <title>NoTe App</title>
      </Head>
   <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">SUPERAPP FOR SUPERLEARNERS</h1>
      <p class="mb-8 leading-relaxed text-white">LEARNING NON-TECH SUBJECTS GOT EASIER </p>
      <div class="flex justify-center ">
     
     <Link class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" href="https://play.google.com/store/apps/details?id=com.anote.app"><Image height={30} src={play}/>   Download App
</Link>
      </div>
    </div>
  </div>
</section>
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap justify-center md:text-left text-center -mb-10 -mx-4">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">MARKETING</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">SEO</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">SEM</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">DIGITAL MARKETING</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">BUSINESS</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">ART OF SALE</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">UI UX DESIGN</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">PROJECT MANAGEMENT</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CANDLESTICK</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">HAMMER</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">BULLISH HARAMI</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">MORNING STAR</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CANDLESTICK</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">EVENING STAR</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">HANGING MAN</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">SHOOTING STAR</a>
          </li>
        </nav>
      </div>
      
    </div>
    <p class='text-center text-white'> AND MORE SUBJECTS TO LEARN</p>
  </div>
  {/* <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
        </p>
      </div>
      <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
        </a>
      </span>
    </div>
  </div> */}
  
</footer>
</>
  )
}
