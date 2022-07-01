import React from "react";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { selectedBook } from "../store/action-creators";

function BookDetails() {
  const selectedBook = useSelector((store) => store.selectedBook);

  if (!selectedBook) {
    return <div className="alert alert-warning">Select a Book</div>;
  }

  const safeHtml = DOMPurify.sanitize(selectedBook.volumeInfo.description);

  return (
    <div className="card">
      <div className="row">
        <div className="col-3">
          <img
            src={
              selectedBook.volumeInfo.imageLinks
                ? selectedBook.volumeInfo.imageLinks.thumbnail
                : "/images/no-image.png"
            }
            className="img-fluid rounded mt-3 ms-3"
            alt="cover"
          />
        </div>
        <div className="col-9 mt-5">
          <h3>{selectedBook.volumeInfo.title}</h3>
        </div>
      </div>
      <div className="card-body">
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        ></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          publisher: {selectedBook.volumeInfo.publisher}
        </li>
        <li className="list-group-item">
          publishedDate: {selectedBook.volumeInfo.publishedDate}
        </li>
        <li className="list-group-item">
          pageCount: {selectedBook.volumeInfo.pageCount}
        </li>
        <li className="list-group-item">
          categories:{" "}
          {selectedBook.volumeInfo.categories
            ? selectedBook.volumeInfo.categories
            : "-"}
        </li>
      </ul>
    </div>
  );
}

export default BookDetails;
