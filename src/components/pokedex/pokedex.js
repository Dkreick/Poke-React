import React, { useState, useEffect } from "react";
import PokemonList from "../pokemon-list/pokemonList";
import axios from "axios";
import Pagination from "../pagination/pagination";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        res.data.results.map((p) => {
          axios
            .get(p.url, {
              cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
              setPokemon((pokemon) => [...pokemon, res.data]);
            });
        });
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setPokemon([]);
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setPokemon([]);
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default Pokedex;
