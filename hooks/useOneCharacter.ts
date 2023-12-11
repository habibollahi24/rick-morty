import { useEffect, useState } from "react";
import { Character, EpisedeType } from "../data";
import axios from "axios";
import { toast } from "react-hot-toast";
export const useOneCharacter = (selectedId: number | null) => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [episodes, setEpisodes] = useState<EpisedeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchOneCharacter(id: number) {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
        ////
        const allEpisodeId = data.episode.map((ep: string) => {
          return ep.split("/")[ep.split("/").length - 1];
        });
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${allEpisodeId}`
        );
        setEpisodes([episodeData].flat());
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error);
        } else {
          throw new Error("golam javab nemide");
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedId) fetchOneCharacter(selectedId);
  }, [selectedId]);

  return { character, episodes, isLoading };
};
