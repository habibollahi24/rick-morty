import { ArrowDownIcon } from "@heroicons/react/24/outline";

import { EpisedeType } from "../../data";
import { LoaderEpisode } from "./LoaderList";
import { useState } from "react";

type Props = {
  episodes: EpisedeType[];
  isLoading: boolean;
};

function EpisodeList({ episodes, isLoading }: Props) {
  const [isAscending, setAssending] = useState(true);
  let sortedlist: EpisedeType[] = [...episodes];

  if (isAscending) {
    sortedlist.sort((a, b) => +new Date(a.air_date) - +new Date(b.air_date));
  } else {
    sortedlist.sort((a, b) => +new Date(b.air_date) - +new Date(a.air_date));
  }

  if (isLoading) {
    return <LoaderEpisode />;
  }

  return (
    <div className="bg-cart p-4 rounded-md h-72 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <p className="font-semibold ">List of Episodes:</p>
        <button
          onClick={() => setAssending((is) => !is)}
          className="bg-gray-500 text-gray-100 rounded-full p-1 cursor-pointer "
        >
          <ArrowDownIcon
            className={`w-3 h-3 transition-all ${
              isAscending ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </div>
      <ul>
        {sortedlist?.map((e, index) => {
          return (
            <li
              key={e.id}
              className="flex justify-between items-center my-1 odd:bg-gray-300 p-1 rounded-sm"
            >
              <div>
                <span className="text-xs">
                  {String(index + 1).padStart(2, "0")}-{" "}
                </span>
                <span className="text-xs">{e.episode}</span> :
                <span className="font-semibold text-sm"> {e.name}</span>
              </div>
              <div className="rounded-md px-2 text-xs">{e.air_date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EpisodeList;
