import React from 'react'
import phonePhoto from "./images/illustration-thank-you.svg"
function Submited({selected,sum}) {
    
  return (
    <div className='card thank'>
        <img src={phonePhoto} alt="thankilustration"/>
        <div className='result'>
            <h4>You selected {selected} out of {sum}</h4>
        </div>
         <h1>Thank you</h1>
         <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Submited