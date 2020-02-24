import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.data);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    console.log("searchResults", searchResults),
    console.log("searchTerm", searchTerm),
    (
      <section className="search-form">
        {/* Add a search form here */}
        <form>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
        </form>
      </section>
    )
  );
}
