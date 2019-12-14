import React from 'react'


class ReservationSection extends React.Component{

    render() {
        return(
            <div className="reservation-wrapper">
                <h1>Reservation</h1>
                {<img src="/static/reservation.png"/>}
                <style>{`
                .reservation-wrapper{
                    width : 300px;
                    height:auto;
                    position: absolute;
                    left: 50%;
                    top: 100px;
                }
                
                
                
                `
                }</style>
            </div>
        )
    }
}

export default ReservationSection;
