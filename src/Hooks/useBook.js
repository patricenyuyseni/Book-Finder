import { useEffect, useState } from "react";
import { searchBooks } from "../service/api";

export default function useBooks(query, page) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const debounce = setTimeout(() => {
      setLoading(true);

      searchBooks(query, page, controller.signal)
        .then((data) => {
          setBooks(data.docs);
          setError(null);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setError("Error fetching books");
          }
        })
        .finally(() => setLoading(false));
    }, 600);

    return () => {
      clearTimeout(debounce);
      controller.abort(); 
    };
  }, [query, page]);

  return { books, loading, error };
}