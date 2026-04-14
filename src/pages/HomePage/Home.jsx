import HeroBody from "./HomeBody";
import HeroLanding from "./HomeLanding";
import './Home.css';

function Home(){
  return(
    <div>
      <HeroLanding />
      <HeroBody />
    </div>
  )
}

export default Home;