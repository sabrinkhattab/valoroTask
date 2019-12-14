import React from 'react'


class ReservationSection extends React.Component{

    render() {
        return(
            <div className="reservation-wrapper">
                reservation
                <img src="/reservation.png"/>
                <style>{`
                .reservation-wrapper{
                    width : 300px;
                    height:auto;
                    background-color:yellow ;
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
