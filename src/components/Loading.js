import React from 'react';
import { DoubleBounce } from 'better-react-spinkit'

import './styles/Loading.css'

/*
  @Loading

  Renders loading animation,
*/

const Loading = () => {
  return(
    <div className="Loading-Container">
      <div className="Spin-Kit">
        <DoubleBounce size={50} color='#E9E9E9' />
      </div>
      <p >
          Loading
      </p>
    </div>
  )
}

export default Loading;