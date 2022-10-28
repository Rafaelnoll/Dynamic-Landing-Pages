import * as Styled from "./styles";

function Home({ theme }) {
  return (
    <div className="Home">
      <Styled.Wrapper background="blue">
        <h1>Hello word!</h1>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
