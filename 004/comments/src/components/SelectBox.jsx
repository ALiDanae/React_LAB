import { useEffect, useState } from "react";

function SelectBox() {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('')

  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSelectedTopic(value)
    fetch(`http://127.0.0.1:8000/?search=${value}`)
      .then((data) => data.json())
      .then((response) => {
        setSearchResult(response.data.matchedTechs);
      });
  };


  const handleTopicSelect = (topicName) => {
    setSelectedTopic(topicName);
    setSearchResult([])
  }
  return (
    <div className="c-box" >
      <input
        className="tpc"
        placeholder="topic"
        type="text"
        onChange={handleSearch}
        value={selectedTopic}
      />
      <div className="c-selectbox" style={searchResult.length ? {} : closeStyle}>
        {/* Render Topic List */}
        {searchResult.map((item) => {
          const {id, name} = item;
          return (
            <div className="item" key={id} onClick={() => handleTopicSelect(name)}>
              <label htmlFor={id}>{name}</label>
              <input type="radio" name="" id={id}  />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectBox;
