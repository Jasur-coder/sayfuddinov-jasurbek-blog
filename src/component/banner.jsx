import { Link } from "react-router-dom";
import { bannerLinks } from "../data";

const Banner = () => {
  return (
    <div className="m-auto">
      <img src="your-photo.jpg" alt="Jasurbek"
        class="w-36 h-36 rounded-full object-cover mb-6 ring-4 ring-blue-600 shadow-lg m-auto" />
      <div className="text-center">
        <h2 class="text-3xl font-bold mb-2 text-slate-50">Sayfuddinov Jasurbek Blog</h2>
        <p class="text-slate-400 mb-4">Software Engineer</p>
      </div>
      <div className="flex justify-center space-x-4 mb-6 text-blue-400 text-xl">
        {bannerLinks.map((el) => (
          <a key={el.id} href={el.to} target="_blank">
            <img width={30} height={30} src={el.icon} alt="" />
          </a>
        ))}
      </div>
      <p class="max-w-xl text-slate-300 mb-8">
        I write about non-technical stuff in the technical world.
      </p>

      <div className="flex justify-center items-center gap-4">
        <Link
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg font-medium shadow-md text-[#fff]"
          to={"/articles"}
        >
          Read blog
        </Link>
        <Link
          className="bg-slate-700 hover:bg-slate-600 transition px-6 py-2 rounded-lg font-medium shadow-md text-[#fff]"
          to={"/contact"}
        >
          About me
        </Link>
      </div>
    </div>
  )
}

export default Banner;