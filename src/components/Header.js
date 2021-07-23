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

        <div>
          <button type='button' onClick={onReload}>Home</button>
          {/* <p>Home</p> */}
        </div>
        <div>
          <button type='button' >Favorites</button>
          {/* <p>Favorites</p> */}
        </div>
        <div>
          <button type='button' onClick={getRandom}> Random Recipe</button>
        </div>
        <div>
          <button>LogIn</button>
          {/* <p>LogIn</p> */}
        </div>

      </div>
      <h1 className="title">The Right Recipe</h1>
    </>

  )
}

export default Header
