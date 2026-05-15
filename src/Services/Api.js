const BASE_URL = "https://openlibrary.org";

export const searchBooks = async (query, page = 1, signal) => {
  const res = await fetch(
    `${BASE_URL}/search.json?q=${query}&page=${page}`,
    { signal }
  );
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};