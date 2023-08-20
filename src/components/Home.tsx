import Sidebar from "./Sidebar";
import Contact from "./Contact";

const Home = () => (
  <>
    <div className="md:flex">
    <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-black bg-indigo-300 font-bold p-4 text-center'>
            Contact Management App
    </h1>
      <Sidebar />
      <Contact />
    </div>
  </>
);

export default Home;