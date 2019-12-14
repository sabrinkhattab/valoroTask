import React from 'react'
import StatusIcons from "../StatusIcons/StatusIcons";
import NightsAndGuests from "../NightsAndGuests/NightsAndGuests";

class BookingItem extends React.Component{

   // getDate = (TimeStamp)=>{
   //      var Date = new Date( TimeStamp* 1000);
   //      return `${Date.getDate()}/${Date.getMonth()}/${Date.getFullYear()}`
   //  }


    render() {
const date = this.props.time

        return(
            <div className="bookingItem-wrapper">
                <StatusIcons ></StatusIcons>
                <div className="test">
                    <div className="guest-details">
                        <p className="name">{this.props.GuestName}</p>
                        <p className="booking-date">{this.props.time}</p>
                    </div>
                    <p className="home-details">3 Bedrooms Condo in Bahi</p>
                    <span className="arrival-date">29 May 2019,</span>

                    <NightsAndGuests />
                    <p className="paid-amount">{`${this.props.salary} $`}</p>



                </div>
                <style>{`
                .bookingItem-wrapper{
                border-bottom: 1px solid gray;
                padding:20px;
                display : flex;
                }
                .name{
                  color : #838383;
                  font-weight: bold;

                }
                .booking-date{
                  color : #838383;
                }
                .arrival-date{
                 color : #d4d4d4
                }
                .test{
                width: 100%;
                margin-left: 10px;
                position : relative

                }
                .test p {
                  margin-block-start: 0;
                  margin-block-end: 0
                }
                .guest-details{
                  display: flex;
                  justify-content: space-between;
                }
                .guest-details p {
                  margin-block-start: 0;
                  margin-block-end: 0

                }
                .home-details {
                   margin-block-start: 0;
                   color : #838383

                }
                .paid-amount{
                      width: 50px;
                      height: 20px;
                      border: 1px solid #d4d4d4;
                      background-color: transparent;
                      border-radius: 11px;
                      text-align: center;
                      display: inline-block;
                      position: absolute;
                      right: 2px;
                      color : #d4d4d4

                 
                }
              
     


                
                `
                }</style>
            </div>
        )
    }
}
export default BookingItem;
