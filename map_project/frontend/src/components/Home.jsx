import Table from "./Table.jsx";
import Title from "./subcomponent/Title.jsx";
import Subtitle from "./subcomponent/Subtitle.jsx";
import Input from "./subcomponent/Button.jsx";
import styled from 'styled-components';

const HomeWrapper = styled.div`
  margin: min(20rem, 30vh) 0;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Alert yourself on potential TTC/Bus accidents</Title>
      <Subtitle>TrackTC will take care of all accidents in Downtown Toronto along your commute, using reliable database system.</Subtitle>
      <Input>Enter your email address</Input>
      <Table/>
    </HomeWrapper>
  );
}

export default Home;