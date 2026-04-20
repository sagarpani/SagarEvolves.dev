
import './Home.css';
import HomeDetails from "./CraftSection";
import CraftSection from "./CraftSection";
import HomeLanding from "./HomeLanding";
import HomeBody from './HomeBody';

function Home(){
  return(
    <div>
      <HomeLanding />
      <HomeBody />
      <CraftSection />
    </div>
  )
}

export default Home;