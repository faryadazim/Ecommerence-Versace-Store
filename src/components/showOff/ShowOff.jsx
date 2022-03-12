import React from 'react'
import './ShowOff.css'

const showOff = () => {
  return (
    <>
      <div className="container mt-5 pt-2">
        <div className="row">
          <div className="col-md-6 GiftGame mt-auto mb-2">
            <h2>

            BURSTING WITH ATTITUDE
            </h2>
            <p>
            Spring-Summer 2022 ready-to-wear is slashed with attitude, as print details burst through and signature Versace Safety Pins fasten garments together.  </p>



            <div className=" btn text-center btn-group-vertical stylishBtn mx-4">
                <button className="btn btn-outline-dark btn-specie-attitute border-end-0  text-start">SHOP WOMEN'S CLOTHING</button>
                <button className="btn btn-outline-dark btn-specie-attitute border-start-0 text-end">SHOP MEN'S CLOTHING</button>
            </div>

            
          </div>
          <div className="col-md-6  px-0  GiftZoneVideo   mt-auto pe-5">
            <div className="bg-image"/>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default showOff
