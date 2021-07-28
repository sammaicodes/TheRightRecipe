import React from 'react'

import "../App.css"

function Header({ getRandom }) {

    const onReload = e => {
        e.preventDefault()
        window.location.reload()
      }

  return (
    <>
      <div className="navbar">

        <div className="hoverOver">
          <button type='button' onClick={onReload}>Home</button>
          {/* <p>Home</p> */}
        </div>
        <div  className="hoverOver">
          <button type='button' >Favorites</button>
          {/* <p>Favorites</p> */}
        </div>
        <div  className="hoverOver">
          <button type='button' onClick={getRandom}> Random Recipe</button>
        </div>
        <div  className="hoverOver">
          <button>LogIn</button>
          {/* <p>LogIn</p> */}
        </div>

      </div>
      <h1 className="title">The Right Recipe</h1>
    </>

  )
}

export default Header
