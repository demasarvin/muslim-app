import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://api.dikiotang.com";
const DoaPage = () => {
  const [listDoa, setListDoa] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/doa`).then((res) => {
      setListDoa(res.data.data);
    });
  }, []);
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5 grid gap-4 px-6 pb-5 text-center md:mt-10 md:grid-cols-3 md:pb-10">
          {listDoa &&
            listDoa.map((doa,index) => (
              <Link
                key={index}
                to={`${index+1}`}
                className="flex items-center rounded-lg bg-white p-4 hover:bg-lime-50"
              >
                <div className="mr-4 flex flex-none h-10 w-10 items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
                  {index+1}
                </div>
                <p className="text-left text-sm">{doa.judul}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default DoaPage;
