import React, { Component } from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'


///// ALWAYS UPDATE STATE IN AN IMMUTABLE FASHION
 /// CREATE COPY AND THEN UPDATE STATE WITH SET STATE

 // KEY PROP IS IMPORTANT PROPERTY WE SHOULD ADD WHEN RENDORING LISTS OF DATA
   // DEFAULT PROPERTY REACT EXPECTS TO FIND ON AN ELEMENT NO MATTER IF IT'S A CUSTOM COMPONENT
   // OR A DEFAULT DEFAULT HTML ELEMENT WHICH YOU RENDER THROUGH A LIST SO BASICALLY
   // BY MAPPING AN ARRAY INTO JSX ELEMENTS. THIS KEY PROPERTY HELPS REACT UPDATE 
   // THE LIST EFFICIENTLY. 
/**
 * 
 */
class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Nick', age: 36},
      {id: 2, name: 'Alexis', age: 34}
    ],

    otherState: 'some other value',

    showPersons: false

  }


  /////// >>>>>>>>> METHODS <<<<<<<<< /////////

  // target should be input in which we typed, value property - value for what user entered
  nameChangeHandler = (event, id) => {
    // update the state but only for input person we typed
     // use find js method to find element
     // findIndex finds element of array and get index
    const personIndex = this.state.persons.findIndex(p => {
      // return true or false if this is element we are looking for
        // if this is equal it will return true, personIndex will hold index of person in 
        // the array for which the id's are equal
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // modern approach
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
   
    this.setState( {persons: persons} );
  }

  //   this.setState({persons: [
  //     // event.target.value = what we enter as input
  //     {name: event.target.value, age: 36},
  //     {name: 'Alexis', age: 34}
  //   ]})
  // }

  // switchNameHandler = (newName, newName2) => {
  //   // console.log('Was clicked!');
  //   // DONT DO THIS: this.state.persons[0] = 'Sam';
  //   this.setState({persons: [
  //     {name: newName, age: 36},
  //     {name: newName2, age: 40}
  //   ] })
  // }

  
  deletePersonHandler = (personIndex) => {
    // make a copy with slice or spread operator
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // arrow function makes it so the this keyword always returns to this class
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }


   /////// >>>>>>>>> RENDER <<<<<<<<< /////////


  render() {
    // hover is difficult with inline styling
    const style = {
      backgroundColor: "green",
      color: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
      // ':hover': {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let persons = null;

    // hardcoded and super inflexible 
      // but good way to render hard coded informatoin
    // if(this.state.showPersons === true) {
    
    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              // use deletePersonHandler function to pass in index by using arrow function
                click={() => this.deletePersonHandler(index)}
                // click={this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Phil", "Lisa")}
              change={this.nameChangeHandler}
              add={this.addName}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "junee", "oscar")}
              >My hobby is soccer
            </Person> */}
          </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'yellow',
      //   color: 'black'
      // };
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('yellow');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      //radium styleroot
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Name
        </button>
        
          {persons}
          
          {/* {this.state.showPersons === true ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Phil", "Lisa")}
              change={this.nameChangeHandler}
              add={this.addName}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "junee", "oscar")}
              >My hobby is soccer
            </Person>
          </div>: null} */}
      </div>
      // </StyleRoot>
    );
  }
}



export default App;
// export default Radium(App);
