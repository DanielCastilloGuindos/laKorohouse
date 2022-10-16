import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductWrapper } from '../components/product/ProductWrapper';
import { getProducts } from '../helpers/getProducts'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Home = () => {
  let products = getProducts();

	return (
		<div
		// className='container md:max-w-6xl'
		>
			<Swiper
			className='h-[38rem] bg-red-100 w-full'
			modules={[Autoplay, Navigation, Pagination, A11y, Scrollbar]}
			slidesPerView={1}
			spaceBetween={50}
			navigation={true}
			pagination={{ clickable: true }}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			loop={true}
				>
				<SwiperSlide className='h-full flex '>
					<div className='mt-auto h-1/2 mb-0 w-full flex flex-col gap-4 justify-start items-center text-center bg-gradient-to-t from-black/30'>
						<h3 className='font-bold text-5xl [text-shadow:0em 0.1em 0.1em rgba(0,0,0,0.4)]'>We build anything</h3>
						<p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, recusandae voluptas inventore accusamus laudantium tempora temporibus maiores id veniam atque!</p>
						<a href="" className='border-4 text-white bg-black/75 [backdrop-filter:blur(5px)] border-white text-xl px-4 py-3 rounded shadow-lg hover:shadow-none duration-300'>Learn more!</a>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-full flex '>
					<div className='mt-auto h-1/2 mb-0 w-full flex flex-col gap-4 justify-start items-center text-center bg-gradient-to-t from-black/30'>
						<h3 className='font-bold text-5xl [text-shadow:0em 0.1em 0.1em rgba(0,0,0,0.4)]'>Slide 2</h3>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-full flex '>
					<div className='mt-auto h-1/2 mb-0 w-full flex flex-col gap-4 justify-start items-center text-center bg-gradient-to-t from-black/30'>
						<h3 className='font-bold text-5xl [text-shadow:0em 0.1em 0.1em rgba(0,0,0,0.4)]'>Slide 3</h3>
					</div>
				</SwiperSlide>
			</Swiper>

			<section className='py-6 flex flex-col justify-center items-center'>

				<header className='flex justify-center'>
					<h2 className='text-5xl text-gray-700 font-extrabold uppercase'>Our products and news</h2>
				</header>
				
        <ProductWrapper products={[products[0], products[1], products[3]]} />
			</section>
		</div>
	)
}
