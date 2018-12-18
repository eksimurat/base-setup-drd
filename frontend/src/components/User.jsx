import React, {Component} from 'react';
import * as actions from "../actions/user";
import { connect } from "react-redux";
import _ from "lodash";

class User extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    testApi(){
        const { data } = this.props;
        _.map(data, (value, key) => {
        console.log(value)
        });
    }

    render(){
    return (
        
        <div id="dashboard-grid">
            {this.testApi()}
        </div>

    
    )
    }
}


const mapStateToProps = ({ data }) => {
    return {
      data
    };
  };


export default connect(mapStateToProps, actions)(User);