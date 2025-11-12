import { projectData } from "../data";

const Projects = () => {
  const arr = Array.from({ length: 6 });

  return (
		<section className='pt-20 pb-40 bg-gray-900'>
			<div className='container'>
				<h1 className='text-3xl font-semibold mb-10 text-[#fff]'>
					My projects
				</h1>
				<div className='grid'>
					<div className='flex gap-7 flex-col justify-start'>
						{projectData.map(({ id, to, description, title, image }) => (
							<div
								key={id}
								className=' h-36 group hover:bg-gray-50 transition-all rounded-lg flex items-start gap-10'
							>
								<img src={image} alt='' width={200} height={120} />

								<div className='mt-5'>
									<a
										href={to}
										className='text-xl group-hover:text-blue-500  font-medium mb-2 text-[#fff]'
										target='_blank'
									>
										{title}
									</a>
									<p className='text-gray-600 mt-5'>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
};

export default Projects;
