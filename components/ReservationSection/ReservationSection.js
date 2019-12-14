import React from 'react'


class ReservationSection extends React.Component{

    render() {
        return(
            <div className="reservation-wrapper">
                <img src="../../static/reservation.png" />
                <h1>Reservation</h1>
                <p> select any reservation item</p>
                <button >Create Booking</button><br/>
                <button >Create Booking with Quote</button>
                <style>{`
                .reservation-wrapper{
                    width : 300px;
                    height:auto;
                    position: absolute;
                    left: 50%;
                    top: 100px;
                    color :#9b9b9b;
                    text-align : center
                }
                .reservation-wrapper h1{
                     font-size: 43px;
                     font-weight: 100;
                     margin-block-end: 18px;
                }
                .reservation-wrapper p{
                   font-weight : 100;
                   margin-bottom: 20px;
                }
                .reservation-wrapper button{
                   background-color : transparent;
                   border : none;
                   border: 1px solid gray;
                   padding: 10px;
                   width: 300px;
                   margin-top : 10px
}
             

                }
                
                `
                }</style>
            </div>
        )
    }
}

export default ReservationSection;
