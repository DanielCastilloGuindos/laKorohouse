import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductWrapper } from '../components/product/ProductWrapper';
import { getProducts } from '../helpers/getProducts'
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Home = () => {
  let products = getProducts();

	return (
		<main
		className='flex flex-col justify-center items-center'
		>
			<article className='container md:max-w-6xl'>

				{/* Carrousell */}
				<section className=''>
					<Swiper
					className='h-[38rem] bg-red-100 w-full cursor-move'
					modules={[Autoplay, Navigation, Pagination, A11y, Scrollbar]}
					slidesPerView={1}
					spaceBetween={0}
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
								<Link to="#" className='border-4 text-white bg-black/75 [backdrop-filter:blur(5px)] border-white text-xl px-4 py-3 rounded shadow-lg hover:shadow-none duration-300'>Learn more!</Link>
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
				</section>

				{/* Our Products more news */}
				<section className='py-6 flex flex-col justify-center items-center  bg-indigo-100'>

					<header className='flex justify-center'>
						<h2 className='text-5xl text-koro-800 font-extrabold uppercase'>Our products and news</h2>
					</header>
					
					<div className='py-10 pl-8 flex flex-wrap justify-center items-center gap-6 h-full'>
						<ProductWrapper products={[products[0], products[1], products[3]]} />
					</div>
				</section>

			</article>

		</main>
	)
}
