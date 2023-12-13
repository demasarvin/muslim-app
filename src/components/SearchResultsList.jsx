/* eslint-disable react/prop-types */

import CardItem from "./CardItem";

const SearchResultsList = ({ results, searchRef, type }) => {
  return (
    <div className="mt-2 h-72 w-full overflow-y-auto bg-white" ref={searchRef}>
      {results.length === 0 ? (
        <div className="flex h-72 flex-col items-center justify-center p-6">
          <p className="font-semibold">Keyword Tidak Ditemukan</p>
          <p className="text-xs">
            Silahkan gunakan keyword yang lebih spesifik
            {type === "surah"
              ? ` seperti Al-Fatihah,
            Al-Baqarah`
              : ""}
          </p>
        </div>
      ) : (
        results.map((result, index) => (
          <CardItem
            key={result.number}
            data={result}
            type={type}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default SearchResultsList;
