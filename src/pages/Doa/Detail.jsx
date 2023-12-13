import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
const baseURL = "https://api.dikiotang.com";

const DetailDoaPage = () => {
  const [doa, setDoa] = useState([]);
  let { id } = useParams();

  const idDoa = id - 1;

  useEffect(() => {
    axios.get(`${baseURL}/doa`).then((res) => {
      setDoa(res.data.data);
    });
  }, []);

  const selectedDoa = doa[idDoa];

  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 md:mt-10 pb-5 ">
          <div className="mx-6 my-5 rounded-lg bg-white p-10 md:mx-20">
            <p className="mb-6 text-center text-lg font-semibold">
              {selectedDoa ? selectedDoa.judul : "Loading..."}
            </p>
            <p className="text-right font-arab text-3xl leading-loose">
              {selectedDoa ? selectedDoa.arab : "Loading..."}
            </p>
            <p className="mt-4 text-lg">{selectedDoa ? selectedDoa.indo : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDoaPage;
