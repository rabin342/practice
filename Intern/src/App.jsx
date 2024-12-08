import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult/SearchResult";
export const BASE_URL = "http://localhost:3000/users";
const App = () => {
  const [data, setData] = useState(null);
  const[filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() =>  {
    const fetchElectronicData = async () => {
      setLoading(true);
    try{
      const response = await fetch(BASE_URL);
      const json = await response.json();
      console.log("Fetched Data:", json);
      setLoading(false);
      setData(json);
      setFilterData(json);
    }
    catch(error) {
      setError("Unable to fetch data");
      setLoading(false);
    }
    };

   fetchElectronicData();
  }, []);
const searchElectronic = (e) => {
  const searchValue = e.target.value;
  console.log(searchValue);
  if (searchValue === ""){
    setFilterData(data);
    return;
  }
  const filter = data?.filter((electronic) =>
  
  electronic.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilterData(filter);
};
 
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading........</div>
  return (
    <Container>
     
     
      <SearchResult onChange={searchElectronic} data = {filterData} />
    </Container>

  );
};


export default App;
const Container = styled.div`
`;

