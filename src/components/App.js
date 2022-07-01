import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import { fetchBooks } from "../store/action-creators";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks("React.js Essentials"));
  }, [dispatch]);

  const renderContent = () => {
    const { loading, error, data } = useSelector((store) => store.books);

    if (loading) {
      return <loading />;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-8">{<BookDetails />}</div>
        <div className="col-4">{<BookList searchedBooks={data} />}</div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchBar initText="React.js Essentials" />
      {renderContent()}
    </div>
  );
};

export default App;
