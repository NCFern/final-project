import React from 'react';

export default function HelloWorld(props) {
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
              <div className='column-full text-center heading-margin'>
                <h1>Nurse Entry</h1>
              </div>
            </div>

            <div className='row'>

              <div className='column-half'>
                {/* placeholder pic here */}
                <img src='../images/placeholder.jpeg' className='img-fluid'></img>
                <div className='custom-file'>
                  <label className='file-input-label' htmlFor='nurseFile'></label>
                  <input required type='file' className='file-input' id='nurseFile'></input>
                </div>
              </div>

              <div className='column-half'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>First Name</label>
                    <input required type='firstName' className='form-control' id='inputFirstName'></input>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input required type='lastName' className='form-control' id='inputLastName'></input>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='inputAddress'>Address</label>
                  <input required type='text' className='form-control' id='inputAddress'></input>
                </div>
                <div className='form-group'>
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
                      <option required disabled>Choose...</option>
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
                </div>

                <div className='form-group'>
                  <label htmlFor='inputPhone'>Phone Number</label>
                  <input required type='text' className='form-control' id='inputPhone'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='inputBirthday'>Birthday</label>
                  <input required type='text' className='form-control' id='inputBirthday'></input>
                </div>
              </div>
            </div>
            <div className='text-right'>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>

          </form>
        </div>
      </div>

    </div>

  );
}
