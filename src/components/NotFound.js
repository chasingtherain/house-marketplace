import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <p>Error 404: Page was not found</p>
        <Link to ="/">
            <button>Back to home</button>
        </Link>
    </div>
  )
}

export default NotFound