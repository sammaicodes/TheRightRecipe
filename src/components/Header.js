import React from 'react'

import "../App.css"

function Header({ getRandom }) {
  return (
    <>
      <div>
        <p>Home</p>
      </div>
      <div>
        <p>Favorites</p>
      </div>
      <div>
        {/* <p onClick={getRandom}> Random Recipe</p> */}
        <button
          type='button'
          style={{
            border: `none`,
            background: `none`,
            outline: `none`,
            fontSize: ``,
          }}
          onClick={getRandom}
        >Random Recipe</button>

      </div>
      <div>
        <p>LogIn</p>
      </div>
      <h1>The Right Recipe</h1>
    </>

  )
}

export default Header
