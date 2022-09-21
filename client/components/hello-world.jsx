import React from 'react';

export default function HelloWorld(props) {
  return (
    // <h1>Hello, World!!!</h1>
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
                <div className='column-full text-center'>
                  <h1>Nurse Entry</h1>
                </div>
              </div>
              <div className='row'>
                <div className='column-half text-center'>
                  <h1>test</h1>
                </div>

                <div className='column-half text-center'>
                  <div className='row'>
                    <div className='column-half'>
                      <label className>First Name</label>
                    </div>
                    <div className='column-half'>
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='column-half'>
                      <input required name='first-name' type='text' className='input-text'></input>
                    </div>
                    <div className='column-half'>
                      <input required name='last-name' type='text' className='input-text'></input>
                    </div>
                  </div>
                  <div className='row'>
                    <label>Address</label>
                  </div>
                  <div className='row'>
                    <input required name='address' type='text' className='input-text'></input>
                  </div>
                <div className='row'>
                  <label>Phone Number</label>
                </div>
                <div className='row'>
                  <input required name='phone-number' type='number' className='input-text'></input>
                </div>
                <div className='row'>
                  <label>Birthday</label>
                </div>
                <div className='row'>
                  <input required name='birthday' type='number' className='input-text'></input>
                </div>

                <div className="row">
                  <div className="column-full">
                    <div className="form-actions text-center">
                      <button type="submit" className="submit-button">SUBMIT</button>
                    </div>
                  </div>
                </div>
                </div>

              </div>
          </form>
        </div>

      </div>
    </div>

  );
}
