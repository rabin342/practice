import styled from "styled-components";
const SearchResult = ({ data }) => {
  return (
    <TopContainer>
      <ElectronicCards>
        {data?.map(({ name, image, price, description }) => (
          <ElectronicCard key={name}>
            <div className="electronic_image">
              <img src={image} alt={name} />
            </div>
            <div className="electronic_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
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
  max-width:320px;

  .electronic_image img {

    max-width: 50%;
    border-radius: 10px;
  }

  .electronic_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .h1{
    margin-top: 8px;
    font-size: 16px;
    }
  }
`;