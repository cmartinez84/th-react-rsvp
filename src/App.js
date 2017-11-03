import React, { Component } from 'react';
import GuestList from './GuestList.jsx';
import Counter from './Counter.jsx';
import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
import './App.css';

class App extends Component {
//you dont need constructor wth create reat app....wtf
  state = {
    pendingGuest: '',
    isFiltered: false,
    guests: [
      {
        name: 'Treausre',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Matt K',
        isConfirmed: true,
        isEditing: true
      },
    ]
  }
  getTotalInvited = ()=> this.state.guests.length;

  getNumberAttending = ()=>
    this.state.guests.reduce((total, guest) =>
       guest.isConfirmed ? total+1 : 0,
       0
    );

  // get attendig guests method
  //get uncomfirmed guests

  handleNameInput = e =>
  this.setState({pendingGuest: e.target.value})

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if(index === indexToChange){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })

  toggleConfirmationAt = index =>{
    this.toggleGuestPropertyAt('isConfirmed', index)
  }

  toggleEditingAt = index =>{
    this.toggleGuestPropertyAt('isEditing', index)
  }
  setNameAt = (name, indexToChange) =>{
    this.setState({
      guests: this.state.guests.map((guest, i)=>{
        if(indexToChange === i){
          return{
            ...guest,
            name
          }
        }
        return guest;
      })
    })
  }

  toggleFilter = () =>{
    this.setState({isFiltered: !this.state.isFiltered});
  }

  newGuestSubmitHandler= e =>{
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests
      ],
    })
    this.setState({
      pendingGuest: ''
    })
  }

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getNumberAttending();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
          />

        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
          />

      </div>
    );
  }
}

export default App;
