import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SearchResultsList from "../../components/SearchResultsList";
import CardItem from "../../components/CardItem";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
const baseURL = "https://api.dikiotang.com";
const QuranPage = () => {
  const [listSurah, setListSurah] = useState(null);
  const [results, setResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    axios.get(`${baseURL}/quran/surah`).then((res) => {
      setListSurah(res.data.data);
      setIsLoading(false);
    });
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isSearchVisible && !results.length) {
      axios.get(`${baseURL}/quran/surah`).then((res) => {
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
    setResults([]);
    setIsSearchVisible(value.trim() !== "");
  };
  return (
    <div className="min-h-screen bg-lime-100">
      <Navbar />
      <div className="container mx-auto">
        <div className="mx-6 mt-10">
          <SearchBar
            placeholder={"Cari Surah..."}
            setResults={setResults}
            setIsSearchVisible={setIsSearchVisible}
            onSearch={handleSearch}
            apiUrl={`${baseURL}/quran/surah`}
            customFilter={(data, value) => {
              return data.filter(
                (item) =>
                  item &&
                  item.name_id &&
                  item.name_id.toLowerCase().includes(value.toLowerCase()),
              );
            }}
          />
          {isSearchVisible && (
            <SearchResultsList
              results={results}
              searchRef={searchRef}
              type="surah"
            />
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mt-5 grid gap-4 px-6 pb-5 text-center md:mt-10 md:grid-cols-3 md:pb-10">
            {listSurah &&
              listSurah.map((surah) => (
                <CardItem key={surah.number} type="surah" data={surah} />
              ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuranPage;
