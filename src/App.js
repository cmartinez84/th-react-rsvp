import React, { Component } from 'react';
import GuestList from './GuestList.jsx';
import './App.css';

class App extends Component {
//you dont need constructor wth create reat app....wtf
  state = {
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
  // get attendig guests method
  //get uncomfirmed guests
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

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"
                    onChange={this.toggleFilter}
                    checked={this.state.isFiltered}

                /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            />
        </div>
      </div>
    );
  }
}

export default App;
