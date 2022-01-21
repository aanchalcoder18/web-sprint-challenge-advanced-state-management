import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfList = (props) => {


    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (<div className="listContainer">
        {
            props.smurf.map(item => {
                return <Smurf smurf={item} key={item.id} />
            })
        }
    </div>);
}

//export default SmurfList;
const mapStateToProps = (state) => {
    console.log('list state', state)
    return {
        smurf: state.smurf,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component. done
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. done
//3. Replace the static isLoading variable with the state loading variable. done