import React, {Component} from 'react';
import Auxiliary from "../util/Auxiliary";
import Superheros from '../components/Superheros/Superheros';
import { connect } from 'react-redux';
import {getSuperheros} from "../store/actions";

class MainApp extends Component {

  componentDidMount() {
    this.props.getSuperheros();
  }

  render() {
    return (
      <Auxiliary>
        {this.props.loader ? <span className="loader">Loading...</span> :
          <Superheros names={this.props.names}/>
        }
      </Auxiliary>
    )
  }
}

const mapStateToProps = ({superheros}) => {
  const {names, loader} = superheros;
  return {names, loader};
};

export default connect( mapStateToProps, {getSuperheros} )(MainApp);
