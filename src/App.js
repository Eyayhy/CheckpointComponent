import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Adress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import imageSrc from './gomycode.jpg';
import Footer from './Component/Footer/Footer';




function App() {
  return (
    <>

   
    <div className="profile-bloc">
   
     
      <ProfilePhoto/>
    <span><FontAwesomeIcon style={{ color: '#bd2130',position:'absolute',float:'right',left:'30%',top:'43.5%'}} icon={faUser} /> </span>  
      <FullName/> 
    <span><FontAwesomeIcon style={{ color: '#bd2130',position:'absolute',float:'right',left:'38%',top:'47.5%'}} icon={faMapMarkerAlt} /> </span> 
      <Address/>
     
     
   </div >

   <div className="background-body">
    <img src={imageSrc} className="img-style"></img>
   
   </div>

   <div className="footer-component">
     <Footer/>
   </div>



   </>

    
  );
}

export default App;
