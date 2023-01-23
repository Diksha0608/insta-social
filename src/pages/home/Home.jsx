
import Topbar from "../../compnents/topbar/Topbar";
import Feed from "../../compnents/feed/Feed";
import Rightbar from "../../compnents/rightbar/Rightbar";
import Sidebar from "../../compnents/sidebar/Sidebar";
import './home.css'



export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}
