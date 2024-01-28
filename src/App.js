import './App.css';
import React,{Component} from 'react';

//nommation de la class APP 
class App extends React.Component {
  // constructor props d'un objet personne avec ses attributs
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        name: 'John Doe',
        bio: "Passionné de la technologie et du développement en particulier, c'est un bosseur !! ",
        imageUrl: "/image/image.jpg",
        profession: 'Développeur',
      },
      show: false,
      time: 0,
    };
  }
/* la founction componentDidMount permet d'initialiser un interval de temps setState
pour faire appel toutes le 1000 miliseconde = 1 seconde
*/
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }
/* cette fonction par contre supprime avec sa méthode clearInterval
la DOM afficher par la dernière fonction*/
  componentWillUnmount() {
    clearInterval(this.interval);
  }
/* Cette fonction est appelée en réponse à des événements, tels 
que le clic sur un bouton. Elle permet de basculer l'affichage du 
profil de la personne entre visible et caché.
*/
  show = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  /* Cette méthode permet de renvoyer l'interface utilisateur en affectant toutes les 
  fonction (show et time ) et les attribut de notre objet personne  */
  render() {
    const {name, bio,  imageUrl, profession } = this.state.personne;
    const { show, time } = this.state;

    return (
      <div className='App'>
        <p> Clicker sur le bouton pour voir mon profil </p>
        <button onClick={this.show}>Show Profil</button>
        {show && (
          <div className='card'>
            <h1>{name}</h1>
            <p>{bio}</p>
            <img src= {imageUrl}  />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p> Temps: {time} seconds</p>
      </div>
    );
  }
}

export default App;
