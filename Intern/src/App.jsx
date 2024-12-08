import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult/SearchResult";
export const BASE_URL = "http://localhost:3000/users";
const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [searchValue, setsearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElectronicData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log("Fetched Data:", json);
        setFilteredData(json);
        setLoading(false);
        setData(json);

      }
      catch (error) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };

    fetchElectronicData();
  }, []);
  const searchElectronic = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(data);
    } else {
      const filtered = data?.filter((electronic) =>

        electronic.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    };
  }
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading........</div>
  return (
    <Container>

      < div className="Search">
        <input
          type="text"
          placeholder="Search Item"
          value={searchValue}

          onChange={(e) => {
            setsearchValue(e.target.value);
            searchElectronic(e);

          }}
        />

      </div>
      <SearchResult data={filteredData} />
    </Container>

  );
};


export default App;
const Container = styled.div`
padding: 20px;
.Search input {
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  height: 20px;
  font-size: 15px;
  padding: 20px;
  float: left;
  
  
}
`;

