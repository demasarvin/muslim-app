import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
const baseURL = "https://api.dikiotang.com";

const DetailDoaPage = () => {
  const [doa, setDoa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  const idDoa = id - 1;

  useEffect(() => {
    axios.get(`${baseURL}/doa`).then((res) => {
      setDoa(res.data.data);
      setIsLoading(false);
    });
  }, []);

  const selectedDoa = doa[idDoa];

  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 pb-5 md:mt-10 ">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mx-6 my-5 rounded-lg bg-white p-10 md:mx-20">
              <p className="mb-6 text-center text-lg font-semibold">
                {selectedDoa.judul}
              </p>
              <p className="text-right font-arab text-3xl leading-loose">
                {selectedDoa.arab}
              </p>
              <p className="mt-4 text-lg">{selectedDoa.indo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailDoaPage;
