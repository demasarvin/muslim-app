/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function CardItem({ data, type, index }) {
  return (
    <Link
      key={type === "surah" ? data.number : index}
      to={type === "surah" ? `ayah/surah/${data.number}` : `${index + 1}`}
      className="flex items-center rounded-lg bg-white p-4 hover:bg-lime-50"
    >
      <div className="mr-4 flex h-10 w-10 items-center justify-center bg-[url('./assets/frame-number.svg')] bg-center bg-no-repeat font-semibold">
        {type === "surah" ? data.number : index + 1}
      </div>
      <ul className="text-left">
        <li className="flex items-center justify-start">
          <p className={`text-sm ${type === "surah" ? "font-bold" : ""}`}>
            {type === "surah" ? data.name_id : data.judul}
          </p>
          <h1 className="ml-2 text-xs">
            {type === "surah" ? `(${data.translation_id})` : ""}
          </h1>
        </li>
        <li className="text-xs">
          {type === "surah"
            ? `${data.revelation_id} · ${data.number_of_verses} Ayat`
            : ""}
        </li>
      </ul>
      <p className="ml-auto font-arab">
        {type === "surah" ? data.name_short : ""}
      </p>
    </Link>
  );
}

export default CardItem;
