import React from 'react'
import './rightbar.css'
import {Users} from '../../data'
import Online from '../online/Online'

export default function Rightbar({profile}) {

const HomeRightbar =()=>{
  return(
    <>
    <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Rob</b> and <b>1 other friends</b> have birthday today
            </span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
            
          </ul></>
  )
}

const ProfileRightbar =()=>{
  return(
    <>
     <h1 className='rightbarTitle'>User Information </h1>
     <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Amsterdam:</span>
        <span className="rightbarValue">Netherland</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarValue">Netherland</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarValue">Single</span>
      </div>
     </div>
     <h4 className='rightbarTitle'>User Information </h4>
     <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/persons/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Ritu Raj</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/2.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Rohit Kumar</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Riya chaudhary</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Sonali Raj</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/5.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Amisha Harle </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/persons/6.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Saumya chaudhary</span>
      </div>
     </div>
    </>
 )
}
  
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
         {/* {profile ? <ProfileRightbar/> : <HomeRightbar/>} */}
         <HomeRightbar/>
        </div>
        </div>
  )
}
