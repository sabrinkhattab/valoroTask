import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class NightsAndGuests extends React.Component{


    render() {
        return(
            <span>
                <span>2</span><FontAwesomeIcon icon={faMoon} className="moon-style" />
                <span>2</span><FontAwesomeIcon icon={faUser} className="user-style"/>

                <style>{`
                    {
                    .moon-style{
                       margin: 0 2px 0 2px
                       color:#d4d4d4
                    }
                    .user-style{
                       margin: 0 2px 0 2px
                    }
                        
                        
                }
                `
                }</style>
            </span>
        )
    }
}
export default NightsAndGuests;
