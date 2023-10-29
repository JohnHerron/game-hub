"use client";

import useSWR from "swr";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fa661e7aamshce267ee63490022p162b28jsn5feff8f00a67',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};
const fetcher = (url: string) => fetch(url, options).then((res) => res.json());

const useGameData = () => {
  const { data, error, isLoading } = useSWR(
    `https://rawg-video-games-database.p.rapidapi.com/games`,
    fetcher,
    {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
    }
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    data
  );
}

export default useGameData;
