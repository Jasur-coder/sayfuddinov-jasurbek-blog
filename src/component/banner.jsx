import { Link } from "react-router-dom";
import { bannerLinks } from "../data";

const Banner = () => {
  return (
		<div className='flex justify-between items-center pt-[400px]'>
			<div>
					<h2 class='text-5xl font-bold mb-4 text-slate-50'>
						Sayfuddinov Jasurbek Blog
					</h2>
					<p class='text-slate-400 mb-7 text-4xl'>Software Engineer</p>

				<div className='flex justify-start space-x-4'>
					{bannerLinks.map(el => (
						<a key={el.id} href={el.to} target='_blank'>
							<img width={30} height={30} src={el.icon} alt='' />
						</a>
					))}
				</div>
				<p class='text-slate-300 mt-6 mb-6 w-[600px]'>
					I create modern and responsive websites using HTML, CSS, JavaScript,
					and React. Open to exciting projects and new challenges!
				</p>

				<div className='flex items-center gap-10'>
					<Link
						className='bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-medium shadow-md text-[#fff]'
						to={'/articles'}
					>
						Read blog
					</Link>
					<Link
						className='bg-slate-700 hover:bg-slate-600 transition px-8 py-4 rounded-lg font-medium shadow-md text-[#fff]'
						to={'/contact'}
					>
						About me
					</Link>
				</div>
			</div>
			<img
				src='your-photo.jpg'
				alt='Jasurbek'
				class='w-80 h-80 rounded-full object-cover ring-4 ring-blue-600 shadow-lg'
			/>
		</div>
	)
}

export default Banner;