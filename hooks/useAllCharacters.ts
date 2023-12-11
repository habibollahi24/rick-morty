import { useState, useEffect } from "react";
import { Character } from "../data";
import axios from "axios";
import toast from "react-hot-toast";

export const useAllCharacters = (query: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results.slice());
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setCharacters([]);
          toast.error(error.response?.data.error);
        } else {
          throw new Error("golam javab nemide");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, [query]);

  return { characters, isLoading };
};
