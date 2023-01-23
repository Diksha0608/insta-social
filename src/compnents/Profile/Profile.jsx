import './profile.css'
import Topbar from "../../compnents/topbar/Topbar";
import Feed from "../../compnents/feed/Feed";
import Rightbar from "../../compnents/rightbar/Rightbar";
import Sidebar from "../../compnents/sidebar/Sidebar";

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRIghtTop">
                <div className="profileCover">
                <img src="assets/persons/11.jpg" alt="" className="profileCoverImg" />
               <img src="assets/persons/22.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Juhi singh</h4>
                    <span className="profileInfoDesc">Hello My dear Friends</span>
                </div>
              
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
       </div>
      </div>
    </>
  )
  
}
