import { useState } from "react";
import Modal from "./Modal";
import { Character } from "../../data";
import { CharacterItem } from "./CharacterList";

type NavbarProps = { children: React.ReactNode[] };
type SearchProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
type FavouriteIconType = {
  favesList: Character[];
  onDeleteFav: (id: number) => void;
};
type AllCharacterMembersType = {
  numsOfCharacters: number;
};

function Navbar({ children }: NavbarProps) {
  const [SearchComponent, CharacterLength, FavoritesComponent] = children;
  return (
    <nav className="flex flex-col gap-1 md:flex-row items-center justify-between py-6 border-b-2 border-gray-300">
      <div className="text-lg">Rick & Morty😍</div>
      {SearchComponent}
      {CharacterLength}
      {FavoritesComponent}
    </nav>
  );
}

export default Navbar;

export const AllCharacterMembers = ({
  numsOfCharacters,
}: AllCharacterMembersType) => {
  return (
    <div className="font-semibold">
      Found <span className="text-xl">{numsOfCharacters}</span> Result
    </div>
  );
};

export const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <input
      type="text"
      className="input-field"
      placeholder="search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export const FavouriteIcon = ({
  favesList,
  onDeleteFav,
}: FavouriteIconType) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="block relative cursor-pointer"
      >
        🤍
        <span className="absolute text-xs -bottom-1 -right-1 rounded-full bg-red-500 text-white  h-4 w-4 text-center">
          {favesList.length}
        </span>
      </div>

      {open && (
        <Modal onOpen={() => setOpen(false)}>
          {favesList.map((fav) => {
            return (
              <CharacterItem key={fav.id} character={fav}>
                <button onClick={() => onDeleteFav(fav.id)} className="ml-auto">
                  🗑
                </button>
              </CharacterItem>
            );
          })}
        </Modal>
      )}
    </>
  );
};
