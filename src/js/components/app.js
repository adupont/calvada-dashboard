import React from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

import RaisedButton from 'material-ui/lib/raised-button';

export default class App extends React.Component {

  render(){
    return (

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

    );
  }
}
