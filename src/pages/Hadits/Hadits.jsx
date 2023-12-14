import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SearchResultsList from "../../components/SearchResultsList";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
const baseURL = "https://api.dikiotang.com";
const HaditsPage = () => {
  const [listHadits, setListHadits] = useState([]);
  const [results, setResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    axios.get(`${baseURL}/hadits`).then((res) => {
      setListHadits(res.data.data);
      setIsLoading(false);
    });
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isSearchVisible && !results.length) {
      axios.get(`${baseURL}/hadits`).then((res) => {
        const searchData = res.data.data;
        setResults(searchData);
      });
    }
  }, [isSearchVisible, results]);

  const handleOutsideClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  const handleSearch = (value) => {
    setIsSearchVisible(value.trim() !== "");
  };
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mx-6 mt-10">
          <SearchBar
            placeholder={"Cari Hadits..."}
            setResults={setResults}
            setIsSearchVisible={setIsSearchVisible}
            onSearch={handleSearch}
            apiUrl={`${baseURL}/hadits`}
            customFilter={(data, value) => {
              return data.filter(
                (item) =>
                  item &&
                  item.judul &&
                  item.judul.toLowerCase().includes(value.toLowerCase()),
              );
            }}
          />
          {isSearchVisible && (
            <SearchResultsList results={results} searchRef={searchRef} />
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </div>
      <Footer />
    </div>
  );
};
export default HaditsPage;
