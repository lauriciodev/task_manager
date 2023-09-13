import NavBar from "../../components/navbar";
import Tasks from "../../components/tasks";
import { MainContainer } from "../../global/styles";

function Home() {
  return (
    <MainContainer>
      <NavBar />
      <Tasks />
    </MainContainer>
  );
}

export default Home;
