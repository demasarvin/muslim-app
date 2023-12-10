import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://api.dikiotang.com";
const QuranPage = () => {
  const [listSurah, setListSurah] = useState(null);
  useEffect(() => {
    axios.get(`${baseURL}/quran/surah`).then((res) => {
      setListSurah(res.data.data);
      // console.log(res.data.data)
    });
  }, []);
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 pb-5 md:pb-10 grid gap-4 px-6 text-center md:mt-10 md:grid-cols-3">
          {listSurah &&
            listSurah.map((surah) => (
              <Link
                key={surah.number}
                to={`ayah/surah/${surah.number}`}
                className="flex items-center rounded-lg bg-white p-4 hover:bg-lime-50"
              >
                <div className="mr-4 flex h-10 w-10 items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
                  {surah.number}
                </div>
                <ul className="text-left">
                  <li className="flex items-center justify-start">
                    <p className="text-sm font-bold">{surah.name_id}</p>
                    <h1 className="ml-2 text-xs">({surah.translation_id})</h1>
                  </li>
                  <li className="text-xs">
                    {surah.revelation_id} · {surah.number_of_verses} Ayat
                  </li>
                </ul>
                <p className="font-arab ml-auto">{surah.name_short}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
