import React from 'react'

import "../App.css"

function Header({ getRandom }) {

    const onReload = e => {
        e.preventDefault()
        window.location.reload()
      }

  return (
    <>
      <div>
      <button type='button' onClick={onReload}>Home</button>
        {/* <p>Home</p> */}
      </div>
      <div>
          <button type='button' >Favorites</button>
        {/* <p>Favorites</p> */}
      </div>
      <div>
        {/* <p onClick={getRandom}> Random Recipe</p> */}
        <button type='button' onClick={getRandom}> Random Recipe</button>

      </div>
      <div>
        <button>LogIn</button>
        {/* <p>LogIn</p> */}
      </div>
      <h1>The Right Recipe</h1>
    </>

  )
}

export default Header
