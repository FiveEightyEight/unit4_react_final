import React from 'react';

const Input = (props) => {
    return (
        <div className='col-12 align-self-center p-5'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" value={props.value} aria-describedby="button-addon2" onChange={props.handleInputValue} onKeyDown={props.handleEnter} />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button" id="button-addon2" onClick={props.handleOnClick}>Search</button>
              </div>
            </div>
          </div>
    )
}

export default Input;