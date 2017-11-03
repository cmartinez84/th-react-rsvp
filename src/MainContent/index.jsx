import React from 'react';
import PropTypes from 'prop-types'
import GuestList from './GuestList';
import Counter from './Counter.jsx';


const MainContent = props =>
<div className="main">
  <div>
    <h2>Invitees</h2>
    <label>
      <input type="checkbox"
            onChange={props.toggleFilter}
            checked={props.isFiltered}

        /> Hide those who haven't responded
    </label>
  </div>
  <Counter totalInvited={props.totalInvited}
          numberAttending={props.numberAttending}
          numberUnconfirmed={props.numberUnconfirmed}/>

  <GuestList guests={props.guests}
    toggleConfirmationAt={props.toggleConfirmationAt}
    toggleEditingAt={props.toggleEditingAt}
    setNameAt={props.setNameAt}
    isFiltered={props.isFiltered}
    removeGuestAt={props.removeGuestAt}
    pendingGuest={props.pendingGuest}
    />
</div>


MainContent.propTypes = {
  // numberAttending: PropTypes.number,
  // numberUnconfirmed: PropTypes.number,
  // totalInvited: PropTypes.number,
}
export default MainContent;
