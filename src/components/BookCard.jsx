import { Link } from "react-router-dom";

export default function BookCard({ book, addToReadingList }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="card">
      <img src={cover} alt={book.title} />

      <h3>{book.title}</h3>

      <p>{book.author_name?.join(", ")}</p>

      <p>{book.first_publish_year}</p>

      <Link to={`/book/${book.key}`}>
        Details
      </Link>

      <button onClick={() => addToReadingList(book)}>
        Add to Reading List
      </button>
    </div>
  );
}