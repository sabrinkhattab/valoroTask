import React from 'react'
import SearchInput from "../Search/SearchInput";
import BookingItem from "../BookingItem/BookingItem";

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.searchHandler=this.searchHandler.bind(this)

        this.state = {
            filteredData : this.props.Recurits
        }
    }
    // componentDidMount() {
    //     this.setState({
    //         filteredData: this.props.Recurits
    //     });
    // }

    searchHandler(event){
        let currentList = [];
        let newList = [];
        //if searchInput isn't empty
        if(event.target.value !== ""){
            currentList = this.props.Recurits;
            newList = currentList.filter(item =>{
                const lowerCaseItem = item.CandidateName.toLowerCase();
                const searchTerm = event.target.value.toLowerCase();
                return lowerCaseItem.includes(searchTerm);
            })
            console.log(newList)
            this.setState({
                filteredData : newList
            })

            //searchInput is empty
        }else{
            newList = this.props.Recurits;
            this.setState({
                filteredData : newList
            })
        }

    }


    render() {
        const RecuritsList = this.state.filteredData.map(item => {
            return <BookingItem key={item.id} GuestName={item.CandidateName} salary={item.salary} time={item.createdAt}/>
        })
        return(
            <div className="sidebar-container">
                <SearchInput handleData={this.searchHandler}/>
                {RecuritsList}

                <style jsx>{`
                p{
                margin-block-start : 0px
                }
                .sidebar-container{
                width :350px;
                height: 100vh;
                background-color : #ebebe5
                }
                `
                }
                </style>
            </div>
        )
    }
}

export default Sidebar;
