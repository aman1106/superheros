import React, {Component} from "react";
import Superhero from "./Superhero";
import Hero from "./Hero";
import { Input } from "antd";
import Auxiliary from "../../util/Auxiliary";

const { Search } = Input;

class Superheros extends Component {

  state = {
    names: this.props.names,
    selectedHero: '',
    selected: false,
    value: '',
  }

  heroSelected = hero => {
    this.setState({...this.state, selectedHero: hero, selected: true});
  }

  onBack = () => {
    this.setState({...this.state, selected: false});
  }

  handleSearch = value => {
    if(value) {
      let names = [];
      this.props.names.forEach((hero, index) => {
        if((hero.name).toLowerCase().includes(value.toLowerCase())) {
          names.push(hero);
        }
      })
      this.setState({...this.state, names: names, value: value});
    } else {
      this.setState({...this.state, names: this.props.names, value: value});
    }
  }

  render() {
    return (
      <div className="page">
        {this.state.selected ? <Hero hero={this.state.selectedHero} onBack={this.onBack}/> :
        <Auxiliary>
          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <Search
              placeholder="Look for superhero"
              onSearch={this.handleSearch}
              onChange={(e) => this.handleSearch(e.target.value)}
              value={this.state.value}
              style={{ width: 200 }}
            />
          </div>
          <ul className="superheros">
            {this.state.names && this.state.names.map((hero, index) => (
                <Superhero hero={hero} heroSelected={this.heroSelected}/>
              )
            )}
          </ul>
          </Auxiliary>
        }
      </div>
    );
  }
}

export default Superheros;
