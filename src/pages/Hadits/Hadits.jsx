import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://api.dikiotang.com";
const HaditsPage = () => {
  const [listHadits, setListHadits] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/hadits`).then((res) => {
      setListHadits(res.data.data);
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 grid gap-4 px-6 pb-5 text-center md:mt-10 md:grid-cols-3 md:pb-10">
          {listHadits &&
            listHadits.map((hadits) => (
              <Link
                key={hadits.no}
                to={`${hadits.no}`}
                className="flex items-center rounded-lg bg-white p-4 hover:bg-lime-50"
              >
                <div className="mr-4 flex h-10 w-10 flex-none items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
                  {hadits.no}
                </div>
                <p className="text-left text-sm">{hadits.judul}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default HaditsPage;
