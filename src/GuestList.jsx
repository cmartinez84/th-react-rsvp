import React from 'react';
import PropTypes from 'prop-types'
import Guest from './Guest'
import PendingGuest from './PendingGuest'

const GuestList = props =>
      <ul>
        <PendingGuest name={props.pendingGuest}/>
        {
          props.guests
          .filter(guest => !props.isFiltered || guest.isConfirmed)
          .map((guest, i)=>
          <Guest
                key={i}
                name={guest.name}
                isConfirmed={guest.isConfirmed}
                isEditing={guest.isEditing}
                handleConfirmation={()=> props.toggleConfirmationAt(i)}
                handleToggleEditing={()=> props.toggleEditingAt(i)}
                setName = {text => props.setNameAt(text, i)}
                handleRemove={() => props.removeGuestAt(i)}
          />
          )
        }
      </ul>

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired

}


export default GuestList;
