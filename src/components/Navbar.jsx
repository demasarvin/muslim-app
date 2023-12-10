import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="py-6 bg-lime-700">
        <div className="container mx-auto flex gap-5 items-center">
          <Link to="/" className="text-white font-serif text-3xl pr-6 font-semibold">Muslim App</Link>
          <Link to="/quran" className="text-white text-lg font-semibold hover:text-lime-300">Quran</Link>
          <Link to="/doa" className="text-white text-lg font-semibold hover:text-lime-300">Doa</Link>
          <Link to="/dzikir" className="text-white text-lg font-semibold hover:text-lime-300">Dzikir</Link>
          <Link to="/hadist" className="text-white text-lg font-semibold hover:text-lime-300">Hadist</Link>
        </div>
      </div>
    )
}
export default Navbar