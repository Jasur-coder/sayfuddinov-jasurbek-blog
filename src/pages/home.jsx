import { Banner } from "../component";

const Home = () => {
  return (
    <section className="bg-gray-900 px-4 py-20">
      <div className="container">
        <div className="w-full flex items-center">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Home;
