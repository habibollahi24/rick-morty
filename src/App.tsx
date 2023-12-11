import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar, {
  AllCharacterMembers,
  FavouriteIcon,
  Search,
} from "./components/Navbar";

//
import { useAllCharacters } from "../hooks/useAllCharacters";
import { useEffect, useState } from "react";
import CharacterCart from "./components/CharacterCart";
import EpisodeList from "./components/EpisodeList";
import { useOneCharacter } from "../hooks/useOneCharacter";
import Alert from "./components/Alert";
import { Character } from "../data";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [faves, setFaves] = useState<Character[]>(
    JSON.parse(localStorage.getItem("FAVOURITES")!) || []
  );
  const { characters, isLoading } = useAllCharacters(query);
  const {
    episodes,
    character,
    isLoading: isLoadingDetail,
  } = useOneCharacter(selectedId);

  const OnCharacterHandler = (id: number) => setSelectedId(id);

  const onAddFaveHandler = (char: Character) => {
    setFaves((prevFaves) => [...prevFaves, char]);
  };

  const deleteFaveHandler = (id: number) => {
    setFaves((prevFaves) => prevFaves.filter((fav) => fav.id !== id));
  };

  const isAddToFavorites = faves.map((fav) => fav.id).includes(selectedId!);

  useEffect(() => {
    localStorage.setItem("FAVOURITES", JSON.stringify(faves));
  }, [faves]);

  return (
    <div className="container--layout">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <AllCharacterMembers numsOfCharacters={characters.length} />
        <FavouriteIcon favesList={faves} onDeleteFav={deleteFaveHandler} />
      </Navbar>

      <main className="grid md:grid-cols-12 gap-6 my-8">
        <div className="col-span-12 md:col-span-5 order-2">
          <CharacterList
            characters={characters}
            onCharacter={OnCharacterHandler}
            selectedId={selectedId}
            isLoading={isLoading}
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          {!selectedId ? (
            <Alert>
              <p className="text-sm font-semibold ">
                Please Select A Character
              </p>
            </Alert>
          ) : (
            <CharacterDetail>
              <CharacterCart
                character={character}
                isLoading={isLoadingDetail}
                onAddFaves={onAddFaveHandler}
                isAddToFavorites={isAddToFavorites}
              />
              <EpisodeList episodes={episodes} isLoading={isLoadingDetail} />
            </CharacterDetail>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
