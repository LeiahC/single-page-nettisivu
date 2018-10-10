import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = {luvut: []};
  }

   componentWillMount() {

    let that = this;
    console.log("Aloitetaan datan haku.");
    fetch('/api/customers/luvut')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    that.setState({ luvut:myJson});
  });

   }

  render() { // render-suoritetaan nettiselaimessa. 

    console.log("Render-metodissa.");

    return (
      <div>
        <h1>Tylsä nettisivu</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <p>{this.state.luvut}</p>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
