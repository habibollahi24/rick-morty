import { Character } from "../../data";
import CharacterStatus from "./CharacterStatus";
import { LoaderCart } from "./LoaderList";

type Props = {
  isLoading: boolean;
  character: Character;
  onAddFaves: (char: Character) => void;
  isAddToFavorites: boolean;
};

function CharacterCart({
  isLoading,
  character,
  onAddFaves,
  isAddToFavorites,
}: Props) {
  if (isLoading) {
    return <LoaderCart />;
  }

  return (
    <div className=" flex rounded-md overflow-hidden  bg-gray-300/50 mb-2 items-center">
      <div className="w-2/5">
        <div className="h-52">
          <img
            src={character?.image}
            alt={character?.name}
            className=" object-cover block h-full"
          />
        </div>
      </div>
      <div className="w-3/5 px-4  ">
        <CharacterStatus character={character && character} />
        <p className="text-gray-500 font-semibold mt-4">last known location:</p>
        <p className="text-gray-700 font-semibold -mt-1">
          {character?.location.name}
        </p>
        {isAddToFavorites ? (
          <p className="text-sm mt-2">Added To Faves ✔</p>
        ) : (
          <button
            className="btn-primary mt-2"
            onClick={() => onAddFaves(character)}
          >
            Add To Favorite
          </button>
        )}
      </div>
    </div>
  );
}

export default CharacterCart;
