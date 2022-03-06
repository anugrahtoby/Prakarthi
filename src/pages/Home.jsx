
import '../style/Prakrathi.css';

import { Link } from "react-router-dom";

const Home = () => {
  return <div className="homeContainer">
      <h1 className='Hometitle'>Prakrathi</h1>
      <div className="storyContainer">
        <div className="story">
          <img src={require('../assets/tree.png')} alt="" srcset="" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>
          </div>
        </div>  
        <div className="story">
          <img src={require('../assets/tree.png')} alt="" srcset="" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>
          </div>
        </div>  
        <div className="story">
          <img src={require('../assets/tree.png')} alt="" srcset="" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>
          </div>
        </div>  
  
      </div>
      <div className="pkfooter">
        <p className='pt'>Contribute to the planet</p>
        <p>Visit Maram</p>
        <a href='https://maramnft.netlify.app'>Visit Site</a>
      </div>
    </div>
  };
  
  export default Home;