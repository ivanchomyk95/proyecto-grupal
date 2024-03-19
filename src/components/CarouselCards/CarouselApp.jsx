import { CardBlog } from './CardBlog';
import { Header } from './Header';
import shoppingInitialState from '../../../public/dataSet/file';

function CarouselApp() {
	const carouselBlogs = [...shoppingInitialState, ...shoppingInitialState];

	return (
		<div className='App'>
			<Header />

			<div className='container my-5'>
				<div className='overflow-hidden w-full'>
					<div className='flex whitespace-nowrap animate-scroll'>
						{carouselBlogs.map((blog, index) => (
							<CardBlog blog={blog} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarouselApp;