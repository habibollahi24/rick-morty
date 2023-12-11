import { Character } from "../../data";

type Props = { character: Character };

function CharacterStatus({ character }: Props) {
  const statusMark =
    character.status === "Dead" ? (
      <div className="red-ball inline-block"></div>
    ) : (
      <div className="green-ball inline-block"></div>
    );
  return (
    <div>
      <p className="font-semibold text-lg text-gray-600">
        {character.gender === "Male" ? "👦" : "👩"}
        {character.name}
      </p>
      <div className="flex items-center space-x-1 font-semibold text-sm text-gray-500 -mt-1">
        <span>{statusMark}</span> <span>{character.status}</span>-
        <span>{character.species}</span>
      </div>
    </div>
  );
}

export default CharacterStatus;
