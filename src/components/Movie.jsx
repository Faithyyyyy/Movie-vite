import { motion } from "framer-motion";
function Movie({ movie }) {
  return (
    <motion.article
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      layout
      className="w-[80%] max-w-[300px] mx-auto"
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        className="rounded-lg mb-5"
      />
    </motion.article>
  );
}

export default Movie;
