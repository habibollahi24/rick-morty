import { Character } from "../../data";

import CharacterStatus from "./CharacterStatus";
import LoaderList from "./LoaderList";

type CharacterListProps = {
  characters: Character[];
  onCharacter: (id: number) => void;
  selectedId: number | null;
  isLoading: boolean;
};

function CharacterList({
  characters,
  onCharacter,
  selectedId,
  isLoading,
}: CharacterListProps) {
  if (isLoading) return <LoaderList />;
  return (
    <div className="col-span-5">
      {characters.map((char) => {
        return (
          <CharacterItem
            key={char.id}
            character={char}
            onCharacter={onCharacter}
            selectedId={selectedId}
          />
        );
      })}
    </div>
  );
}

type CharacterItemProps = {
  character: Character;
  onCharacter?: (id: number) => void;
  selectedId?: number | null;
  children?: React.ReactNode;
};

export function CharacterItem({
  character,
  onCharacter,
  selectedId,
  children,
}: CharacterItemProps) {
  return (
    <div
      onClick={() => onCharacter?.(character.id)}
      className={` flex p-2 bg-gray-300/50 mb-3 rounded-md items-center justify-between transition-all hover:bg-gray-300 cursor-pointer  ${
        selectedId === character.id
          ? "shadow-md scale-105 bg-gray-400/60 hover:bg-gray-400 "
          : ""
      } `}
    >
      <div className="flex items-center space-x-2 ">
        <img
          src={character.image}
          alt={character.name}
          className="w-20 h-20 rounded-2xl"
        />
        <CharacterStatus character={character} />
      </div>
      {children}
    </div>
  );
}

export default CharacterList;
