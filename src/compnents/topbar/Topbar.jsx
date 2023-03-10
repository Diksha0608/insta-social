import React from 'react'
import './topbar.css'
import {Search, Person,Chat,Notifications} from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>InstaSocial</span>
      </div>
      <div className="topbarCenter"> 
      <div className="searchbar">
        <Search className='searchIcon'/>
        <input placeholder='search your friends ' className='searchInput'/>
      </div>
      </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <span className="topbarlink">HomePage</span>
            <span className="topbarlink">TimeLine</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
<Person/>
<span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
<Chat/>
<span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
<Notifications/>
<span className='topbarIconBadge'>1</span>
            </div>
          </div>
          <img src="/assets/persons/1.jpeg" alt="" className="topbarImg" />
        </div>
     
    </div>
  )
}
