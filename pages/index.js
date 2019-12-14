import Error from 'next/error'
import Link from 'next/link'
import Sidebar from "../components/Sidebar/Sidebar";
import ReservationSection from "../components/ReservationSection/ReservationSection";
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {

// console.log(this.props.data)
    // if( typeof stories === 'undefined' || ! stories ) return <Error statusCode={503} />
    return (
        <div className="container">
          <Sidebar Recurits={this.props.data}></Sidebar>
          <ReservationSection></ReservationSection>


          <style jsx>{`
          
          
          `}</style>
          <style jsx global>{`
        body { 
          margin: 0;
          background: #f0f0ed;
          font-family: system-ui;
          
        }
      `}</style>
        </div>
    )

  }

}

Index.getInitialProps = async function() {
    var data ;
    try {
        const res = await fetch('http://5df0ddb79df6fb00142bd364.mockapi.io/Valoro/Recruit');
         data = await  res.json();
    }catch (e) {
        data = undefined
    }

    return {
       data
    }
}

export default Index;
