import React from 'react';

export default class NurseEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      nurseAddress: '',
      phoneNumber: '',
      birthday: '',
      photo: '',
      nurseId: '',
      userId: '',
      hospitalId: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleNurseAddressChange = this.handleNurseAddressChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleNurseIdChange = this.handleNurseIdChange.bind(this);
    this.handleUserIdChange = this.handleUserIdChange.bind(this);
    this.handleHospitalIdChange = this.handleHospitalIdChange.bind(this);
    this.addtoDatabase = this.addtoDatabase.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleNurseAddressChange(event) {
    this.setState({
      nurseAddress: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleBirthdayChange(event) {
    this.setState({
      birthday: event.target.value
    });
  }

  handlePhotoChange(event) {
    this.setState({
      photo: event.target.value
    });
  }

  handleNurseIdChange(event) {
    this.setState({
      nurseId: event.target.value
    });
  }

  handleUserIdChange(event) {
    this.setState({
      userId: event.target.value
    });
  }

  handleHospitalIdChange(event) {
    this.setState({
      hospitalId: event.target.value
    });
  }

  addtoDatabase(event) {
    event.preventDefault();

    const newObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      photo: this.state.photo,
      nurseAddress: this.state.nurseAddress,
      phoneNumber: this.state.phoneNumber,
      birthday: this.state.birthday
    };

    fetch('/api/nurseEntries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObject)
    });

  }

  render() {
    return (
    <div>
      <header className='navi-bar'>
        <div className='container'>
          Remedy Recall
        </div>
      </header>

      <div className='container'>
        <div data-view='nurse-form'>
            <form id='new-form' onSubmit={this.addtoDatabase}>
            <div className='row'>
              <div className='column-full center heading-margin'>
                <h1>Nurse Entry</h1>
              </div>
            </div>

            <div className='row'>

              <div className='column-half center'>
                <img src='/images/placeholder.jpeg' className='img-thumbnail'></img>
                <div className='custom-file'>
                  <label className='photo' htmlFor='photo'></label>
                  <input required type='file' className='photo' id='photo' value={this.state.photo} onChange={this.handlePhotoChange}></input>
                </div>
              </div>

              <div className='column-half'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>First Name</label>
                    <input required type='firstName' className='form-control' id='firstName' value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input required type='lastName' className='form-control' id='lastName' value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='nurseAddress'>Address</label>
                  <input required type='text' className='form-control' id='nurseAddress' value={this.state.nurseAddress} onChange={this.handleNurseAddressChange}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input required type='text' className='form-control' id='phoneNumber' value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='birthday'>Birthday</label>
                  <input required type='text' className='form-control' id='birthday' value={this.state.birthday} onChange={this.handleBirthdayChange}></input>
                </div>

              </div>
            </div>
            <div className='text-right'>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>

          </form>
        </div>
      </div>

    </div>

    );
  }
}
