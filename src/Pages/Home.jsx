import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import useBooks from "../Hooks/useBook";

export default function Home() {
  const [query, setQuery] = useState("harry potter");
  const [page, setPage] = useState(1);
  const { books, loading, error } = useBooks(query, page);

  const addToReadingList = (book) => {
    const existing = JSON.parse(localStorage.getItem("readingList")) || [];
    localStorage.setItem(
      "readingList",
      JSON.stringify([...existing, book])
    );
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <Loader />}
      {error && <p>{error}</p>}

      <div className="grid">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToReadingList={addToReadingList}
          />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}