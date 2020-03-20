import React, {Component} from "react";
import { connect } from 'react-redux';
import {getSuperheros} from "./store/actions";
import Hero from "./Hero";
import { Card } from "antd";
import Auxiliary from "./util/Auxiliary";

class Superheros extends Component {
  state = {
    selectedHero: '',
    selected: false,
  };

  componentDidMount() {
    this.props.getSuperheros();
  }

  heroSelected = hero => {
    this.setState({...this.state, selectedHero: hero, selected: true});
  }

  onBack = () => {
    this.setState({...this.state, selected: false});
  }

  render() {
    console.log(this.state)
    return (
      <Auxiliary>
        {this.props.loader ? <span className="loader">Loading...</span> :
        this.state.selected ? <Hero hero={this.state.selectedHero} onBack={this.onBack}/> :

          this.props.names && this.props.names.map((hero, index) => {
            return (
              <Auxiliary>
                <Card className="gx-card" bodyStyle={{backgroundColor: "#514e4e", color: "#fff"}} key={hero.id} onClick={() => {this.heroSelected(hero)}} style={{backgroundImage: `url(${hero.images.sm})`}}>
                  {hero.name}
                </Card>
              </Auxiliary>
            )
          })
        }
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({superheros}) => {
  const {names, loader} = superheros;
  return {names, loader};
};

export default connect( mapStateToProps, {getSuperheros} )( Superheros );
