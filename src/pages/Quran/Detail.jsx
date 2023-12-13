import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
const baseURL = "https://api.dikiotang.com";

const DetailQuranPage = () => {
  const [listAyah, setListAyah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/quran/ayah/surah/${id}`).then((res) => {
      setListAyah(res.data.data);
      setIsLoading(false);
    });
  });
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 pb-5 md:mt-10">
          {isLoading ? (
            <Loading />
          ) : (
            listAyah &&
            listAyah.map((ayah) => (
              <div
                key={ayah.id}
                className="mx-6 my-5 rounded-lg bg-white p-6 md:mx-20"
              >
                <div className="mb-6 flex">
                  <div className="mr-4 mt-4 flex h-10 w-10 flex-none items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
                    {ayah.ayah}
                  </div>
                  <div className="ml-auto text-right font-arab text-3xl leading-loose">
                    {ayah.arab}
                  </div>
                </div>
                <p className="mb-2 text-lg text-lime-700">{ayah.latin}</p>
                <p className="text-lg">{ayah.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailQuranPage;
