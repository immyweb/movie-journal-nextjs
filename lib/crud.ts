import requests from "../src/requests";
import { IMovieListItem } from "../types/types";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export async function getMovies() {
  const res = await fetch(`${requests.dbApi}/movies`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();

  return data;
}

export async function getMovie(id: string | string[]) {
  const res = await fetch(`${requests.dbApi}/movie/${id}`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();

  return data;
}

export async function postMovie(movieItemData: IMovieListItem) {
  const res = await fetch(`${requests.dbApi}/add-movie`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(movieItemData),
  });
  const data = await res.json();

  return data;
}

export async function updateMovie(listItemId: string, updates: IMovieListItem) {
  const res = await fetch(`${requests.dbApi}/edit-movie/${listItemId}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(updates),
  });
  const data = await res.json();

  return data;
}

export async function removeMovie(id: string) {
  const res = await fetch(`${requests.dbApi}/delete-movie/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  const data = await res.json();

  return data;
}

export async function searchMovie(title: string) {
  const res = await fetch(`${requests.baseURL}${requests.fetchId}${title}`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();

  return data;
}

export async function getMovieDetail(id: number) {
  const res = await fetch(
    `${requests.baseURL}movie/${id}${requests.fetchDetail}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  const data = await res.json();

  return data;
}

export async function getMovieCredits(id: number) {
  const res = await fetch(
    `${requests.baseURL}movie/${id}${requests.fetchCredits}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  const data = await res.json();

  return data;
}
