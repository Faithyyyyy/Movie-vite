import Movie from "./Movie";
import { CiDark } from "react-icons/ci";
import { AiFillAppstore } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import avatar3 from "./../assets/avatar3.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

function MainPage() {
  const [popular, setpPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [apiError, setApiError] = useState(null);

  const fetchMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0b31dce6cb6e7db80fea5f5a94b2344c"
      )
      .then((res) => {
        const fetchData = res.data.results;
        setpPopular(fetchData);
        setFiltered(fetchData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filter = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filter);
  }, [activeGenre]);

  return (
    <main className="flex-grow  bg-[#171f32] text-white ">
      <nav className=" flex items-center justify-between w-full lg:border-b border-gray-400 py-9 px-9 ">
        {/* LOGO */}
        <h2 className="uppercase font-stix lg:hidden">
          Movie <span className="text-blue-300">vite</span>.
        </h2>
        {/* LOGO */}
        <div className=" gap-12 hidden md:flex">
          <button
            className={` cursor-pointer ${activeGenre === 0 ? "active" : ""} `}
            onClick={() => setActiveGenre(0)}
          >
            All
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 35 ? "active" : ""} `}
            onClick={() => setActiveGenre(35)}
          >
            Comedy
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 28 ? "active" : ""} `}
            onClick={() => setActiveGenre(28)}
          >
            Action
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 27 ? "active" : ""} `}
            onClick={() => setActiveGenre(27)}
          >
            Horror
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <CiDark className="text-lg" />
          <AiFillAppstore className="text-lg" />
          <HiOutlineBell className="text-lg" />
          <img src={avatar3} className="w-7" />
        </div>
      </nav>
      <div className="">
        <div className=" gap-12  flex md:hidden px-10 mb-12 overflow-hidden">
          <button
            className={` cursor-pointer ${activeGenre === 0 ? "active" : ""} `}
            onClick={() => setActiveGenre(0)}
          >
            All
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 35 ? "active" : ""} `}
            onClick={() => setActiveGenre(35)}
          >
            Comedy
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 28 ? "active" : ""} `}
            onClick={() => setActiveGenre(28)}
          >
            Action
          </button>
          <button
            className={` cursor-pointer ${activeGenre === 27 ? "active" : ""} `}
            onClick={() => setActiveGenre(27)}
          >
            Horror
          </button>
        </div>
        {apiError && <p className="text-center mt-60">{apiError}</p>}
        {/* <Movie /> */}
        <motion.div layout className="movies-container my-11">
          <AnimatePresence>
            {filtered.map((prd) => {
              return <Movie key={prd.id} movie={prd} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}

export default MainPage;
