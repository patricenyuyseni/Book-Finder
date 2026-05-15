import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetails } from "../service/api";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getBookDetails(id).then(setDetails);
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="fade">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{details.title}</h2>
      <p>{details.description?.value || "No description"}</p>
      <p>Pages: {details.number_of_pages}</p>
    </div>
  );
}