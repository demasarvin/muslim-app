import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
const baseURL = "https://api.dikiotang.com";

const DetailHaditsPage = () => {
  const [hadits, setHadits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/hadits/${id}`).then((res) => {
      setHadits(res.data.data[0]);
      setIsLoading(false);
    });
  }, [id]);

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
                {hadits.judul}
              </p>
              <p className="text-right font-arab text-3xl leading-loose">
                {hadits.arab}
              </p>
              <p className="mt-4 text-lg">{hadits.indo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DetailHaditsPage;
