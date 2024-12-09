import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./assets/Components/SearchResult/SearchResult";
import Cart from "./assets/Components/Addtocart/Cart";

export const BASE_URL = "http://localhost:3000/users";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [cart, setCart] = useState([]); 
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
      } catch (error) {
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
    }
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart; 
      }
      return [...prevCart, { ...item, quantity: 1 }]; 
    });
  };

  const updateQuantity = (id, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <div className="Search">
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

      <Cart 
        cart={cart} 
        updateQuantity={updateQuantity} 
        removeItem={removeItem} 
      />

      <SearchResult data={filteredData} addToCart={addToCart} />
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
