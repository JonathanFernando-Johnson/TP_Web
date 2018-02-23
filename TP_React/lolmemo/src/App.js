import React, { Component } from 'react';
import './App.css';
import Data from "./data/champions.json";

class App extends Component {

    var champions = Data.map();

    render() {
        console.log(champions);
        return (
            <div className="deck">
                <div className="col-md-12 col-sm-12 col-12">
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg" alt="Ivern_0"></img>
                          <figcaption>Ivern</figcaption>
                      </figure>
                  </article>
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_1.jpg" alt="Ivern_1"></img>
                          <figcaption>Ivern</figcaption>
                      </figure>
                  </article>
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" alt="Teemo_0"></img>
                          <figcaption>Teemo</figcaption>
                      </figure>
                  </article>
                </div>
                <div className="col-md-12 col-sm-12 col-12">
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_1.jpg" alt="Teemo_1"></img>
                          <figcaption>Teemo</figcaption>
                      </figure>
                  </article>
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg" alt="Taric_0"></img>
                          <figcaption>Taric</figcaption>
                      </figure>
                  </article>
                  <article className="col-md-4 col-sm-4 col-4 thumbnail">
                      <figure>
                          <img className="img-responsive card" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_1.jpg" alt="Taric_1"></img>
                          <figcaption>Taric</figcaption>
                      </figure>
                  </article>
                </div>
            </div>
        );
    }
}

export default App;
