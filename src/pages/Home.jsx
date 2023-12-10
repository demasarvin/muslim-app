import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 grid gap-6 px-6 text-center font-semibold md:mt-10 md:grid-cols-2">
          <Link
            to="/quran"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">📓</span>{" "}
            <p className="pt-2 text-lg">Baca Quran</p>
          </Link>
          <Link
            to="/doa"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">🤲</span>{" "}
            <p className="pt-2 text-lg">Baca Doa</p>
          </Link>
          <Link
            to="/dzikir"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">📿</span>{" "}
            <p className="pt-2 text-lg">Baca Dzikir</p>
          </Link>
          <Link
            to="/hadits"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">📜</span>{" "}
            <p className="pt-2 text-lg">Baca Hadits</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
