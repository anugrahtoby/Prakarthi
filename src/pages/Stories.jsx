
import '../style/Prakrathi.css';

const Stories = () => {
  return <div className="bighomeContainer">
      <h1 className='title'>Stories</h1>
      <p className='desc'>Stories told by Mother Earth to us to enrich and preserve her.
  Environmental news and updates bought to you by the Prakrati Team to spread the word.</p>
      <div className="bigstoryContainer">
        <div className="bigstory">
          <img src={require('../assets/tree.png')} alt="tree" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>

            <a className="more">...Read More</a>
          </div>
        </div>   
        <div className="bigstory">
          <img src={require('../assets/tree.png')} alt="tree" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>

            <a className="more">...Read More</a>
          </div>
        </div>   
        <div className="bigstory">
          <img src={require('../assets/tree.png')} alt="tree" />
          <div>
            <p className='pt'>Trees: Importance</p>
            <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.
              Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. Have you ever taken an Aspirin? It comes from the bark of a tree!</p>

            <a className="more">...Read More</a>
          </div>
        </div>   

      </div>
    </div>
  };
  
  export default Stories;