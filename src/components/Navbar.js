import React from 'react'
import PropTypes from 'prop-types'
import './text.css';

export default function Navbar(props) {
  const redTheme = () => {
    document.body.style.backgroundColor = '#fb5454 ';
    document.body.style.color = 'black';
  }
  const greenTheme = () => {
    document.body.style.backgroundColor = 'lime';
    document.body.style.color = 'black';
  }
  const blueTheme = () => {
    document.body.style.backgroundColor = 'aqua';
    document.body.style.color = 'black';
  }
  return (
    <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>


      <div className="container-fluid">
        <div className="rend">
          <p className="navbar-brand h1 ">{props.title}</p>
          <button className={`navbar-toggler bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
        <div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label `} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <div>
            <button className='theme mx-2 my-2 red' onClick={redTheme}></button>
            <button className='theme mx-2 blue' onClick={blueTheme}></button>
            <button className='theme mx-2 green' onClick={greenTheme}></button>
          </div>


        </div>
      </div>

    </nav>

  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}