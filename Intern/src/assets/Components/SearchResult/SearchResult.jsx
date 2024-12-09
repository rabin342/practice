import styled from "styled-components";

const SearchResult = ({ data, addToCart }) => {
  return (
    <TopContainer>
      <ElectronicCards>
        {data?.map(({ id, name, image, price, description }) => (
          <ElectronicCard key={id}>
            <div className="electronic_image">
              <img src={image} alt={name} />
            </div>
            <div className="electronic_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <button onClick={() => addToCart({ id, name, price })}>
                  Add to Cart
                </button>
              </div>
            </div>
          </ElectronicCard>
        ))}
      </ElectronicCards>
    </TopContainer>
  );
};

export default SearchResult;

const TopContainer = styled.section`
  padding: 20px;
`;

const ElectronicCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  justify-content: center;
`;

const ElectronicCard = styled.div`
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  max-width: 320px;

  .electronic_image img {
    max-width: 100%;
    border-radius: 10px;
  }

  .electronic_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      margin-top: 8px;
    }
  }
`;
