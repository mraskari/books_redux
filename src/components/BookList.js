import React from "react";
import Book from "./Book";

function BookList(props) {
  const renderBooks = () => {
    //console.log("in renderBooks", props.searchedBooks);

    if (props.searchedBooks) {
      return props.searchedBooks.map((books) => <Book book={books} />);
    }
  };

  return <div>{renderBooks()}</div>;
}

export default BookList;
