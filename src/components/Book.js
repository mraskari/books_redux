import React from "react";
import { useDispatch } from "react-redux";
import { selectedBook } from "../store/action-creators";

function Book(props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectedBook(props.book));
  };

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px", cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              props.book.volumeInfo.imageLinks
                ? props.book.volumeInfo.imageLinks.smallThumbnail
                : "/images/no-image.png"
            }
            className="img-fluid rounded-start"
            alt="cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.book.volumeInfo.title}</h5>
            <p className="card-text">
              <small className="text-muted">
                {props.book.volumeInfo.authors
                  ? props.book.volumeInfo.authors.join(",")
                  : "_"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
