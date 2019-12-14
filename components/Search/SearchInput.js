import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        // this.searchHandler=this.searchHandler.bind(this)

    }

    // searchHandler(event){
    //     let currentList = [];
    //     let newList = [];
    //     //if searchInput isn't empty
    //     if(event.target.value !== ""){
    //         currentList = this.props.data;
    //         newList = currentList.filter(item =>{
    //             const lowerCaseItem = item.CandidateName.toLowerCase();
    //             const searchTerm = event.target.value.toLowerCase();
    //             return lowerCaseItem.includes(searchTerm);
    //         })
    //         console.log(newList)
    //
    //         //searchInput is empty
    //     }else{
    //         newList = this.props.data;
    //         console.log(newList)
    //     }
    //
    // }
    render() {
        return(
            <div className="Search-wrapper">
                <input placeholder="Search" className="Input-style" type="text" onChange={this.props.handleData}/>
                <FontAwesomeIcon icon={faSearch}  className="icon-style"/>
                <style>{`
                .Input-style{
                   padding: 9px;
                   width:223px;
                   margin-left:27px;
                   margin-top:18px;
                   position : relative;
                   border: none;
                 
                }
                .icon-style{
                    position: absolute;
                    left: 244px;
                    top: 28px;
                    color:#e8e8e8
                }
                
                
                
                `
                }</style>
            </div>

        )
    }
}
export default SearchInput;
