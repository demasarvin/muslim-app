import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const DzikirPage = () => {
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 grid gap-6 px-6 text-center font-semibold md:mt-10 ">
          <Link
            to="/dzikir/pagi"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">🌅</span>{" "}
            <p className="pt-2 text-lg">Dzikir Pagi</p>
          </Link>
          <Link
            to="/dzikir/sore"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">🌇</span>{" "}
            <p className="pt-2 text-lg">Dzikir Sore</p>
          </Link>
          <Link
            to="/dzikir/shalat"
            className="rounded-lg bg-white p-6 hover:bg-lime-700 hover:text-white"
          >
            <span className="text-3xl">🕌</span>{" "}
            <p className="pt-2 text-lg">Dzikir Shalat</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DzikirPage;
