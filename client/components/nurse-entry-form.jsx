import React from 'react';

export default class NurseEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
    this.addtoDatabase = this.addtoDatabse.bind(this);
  }

  // addtoDatabase() {
  //   const newObject = { firstName, lastName, photo, nurseAddress, phoneNumber, birthday };
  //   fetch('/api/nurseEntries', { method: 'POST', body: JSON.stringify(newObject) });
  // }

  render() {
    return (
    <div>
      <header className='navi-bar'>
        <div className='container'>
          Ledger
        </div>
      </header>

      <div className='container'>
        <div data-view='nurse-form'>
          <form id='new-form'>
            <div className='row'>
              <div className='column-full center heading-margin'>
                <h1>Nurse Entry</h1>
              </div>
            </div>

            <div className='row'>

              <div className='column-half center'>
                <img src='/images/placeholder.jpeg' className='img-thumbnail'></img>
                <div className='custom-file'>
                  <label className='file-input-label' htmlFor='photo'></label>
                  <input required type='file' className='file-input' id='photo'></input>
                </div>
              </div>

              <div className='column-half'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>First Name</label>
                    <input required type='firstName' className='form-control' id='firstName'></input>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input required type='lastName' className='form-control' id='lastName'></input>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='nurseAddress'>Address</label>
                  <input required type='text' className='form-control' id='nurseAddress'></input>
                </div>
                {/* <div className='form-group'>
                  <label htmlFor='inputAddress2'>Address 2</label>
                  <input required type='text' className='form-control' id='inputAddress2'></input>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputCity'>City</label>
                    <input required type='text' className='form-control' id='inputCity'></input>
                  </div>
                  <div className='form-group col-md-4'>
                    <label htmlFor='inputState'>State</label>
                    <select id='inputState' className='form-control'>
                      <option disabled selected>Choose...</option>
                      <option>California</option>
                      <option>Nevada</option>
                      <option>Arizona</option>
                      <option>Oregon</option>
                      <option>other</option>
                    </select>
                  </div>
                  <div className='form-group col-md-2'>
                    <label htmlFor='inputZip'>Zip</label>
                    <input required type='text' className='form-control' id='inputAddress'></input>
                  </div>
                </div> */}

                <div className='form-group'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input required type='text' className='form-control' id='phoneNumber'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='birthday'>Birthday</label>
                  <input required type='text' className='form-control' id='birthday'></input>
                </div>

              </div>
            </div>
            <div className='text-right'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

          </form>
        </div>
      </div>

    </div>

    );
  }
}
