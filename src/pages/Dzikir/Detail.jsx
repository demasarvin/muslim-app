import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
const baseURL = "https://api.dikiotang.com";

const DetailDzikirPage = () => {
  const [listDzikir, setListDzikir] = useState([]);
  let { type } = useParams();
  useEffect(() => {
    axios
      .get(`${baseURL}/dzikir/${type}`)
      .then((res) => {
        setListDzikir(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 md:mt-10 pb-5">
          {listDzikir &&
            listDzikir.map((dzikir, index) => (
              <div
                key={index}
                className="mx-6 my-5 rounded-lg bg-white p-6 md:mx-20"
              >
                <div className="mb-4 flex justify-end">
                  <p className="rounded-full bg-lime-700 px-2 py-1.5 text-right font-semibold text-white">
                    Dibaca : {dzikir.ulang}
                  </p>
                </div>
                <div className="mb-6 flex">
                  <div className="mr-4 mt-4 flex h-10 w-10 flex-none items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-auto text-right font-arab text-3xl leading-loose">
                    {dzikir.arab}
                  </div>
                </div>
                <p className="mb-2 text-lg text-lime-700">{dzikir.indo}</p>
                <p className="text-lg">{dzikir.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailDzikirPage;
