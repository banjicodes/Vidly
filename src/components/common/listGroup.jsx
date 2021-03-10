import React from "react";

const ListGroup = (props) => {
  const {
    movieGenres,
    textProperty,
    valueProperty,
    onGenreSelect,
    selectedGenreType,
  } = props;
  return (
    <ul className="list-group mt-4">
      {movieGenres.map((genre) => (
        <li
          onClick={() => onGenreSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenreType
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
