import { useEffect, useState } from "react";

export default function ReadingList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("readingList")) || [];
    setBooks(saved);
  }, []);

  const removeBook = (key) => {
    const updated = books.filter((b) => b.key !== key);
    setBooks(updated);
    localStorage.setItem("readingList", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>My Reading List</h2>
      {books.map((b) => (
        <div key={b.key}>
          <p>{b.title}</p>
          <button onClick={() => removeBook(b.key)}>Remove</button>
        </div>
      ))}
    </div>
  );
}