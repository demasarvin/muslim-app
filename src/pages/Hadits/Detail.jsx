import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
const baseURL = "https://api.dikiotang.com";

const DetailHaditsPage = () => {
  const [hadits, setHadits] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/hadits/${id}`).then((res) => {
      setHadits(res.data.data[0]);
    });
  },[id])

  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 pb-5 md:mt-10 ">
          <div className="mx-6 my-5 rounded-lg bg-white p-10 md:mx-20">
            <p className="mb-6 text-center text-lg font-semibold">
              {hadits ? hadits.judul : "Loading..."}
            </p>
            <p className="text-right font-arab text-3xl leading-loose">
              {hadits ? hadits.arab : "Loading..."}
            </p>
            <p className="mt-4 text-lg">{hadits ? hadits.indo : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailHaditsPage;
