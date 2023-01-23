import './post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from '../../data'
import { useState } from 'react'

export default function Post({post}) {
    const [hit , setHit] =useState(post.like);
    const [isHit,setIsHit] = useState(false);

   const changeOnHit= ()=>{
        setHit(isHit ? hit-1: hit+1)
        setIsHit(!isHit)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter(u=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUserName">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="likeIcon" onClick={changeOnHit} />
                <img src="/assets/heart.png" alt="" className="likeIcon"  onClick={changeOnHit}/>
                <span className="postLikeCounter"> {hit} people like it</span>
            </div>
<div className="postBottomRight">{post.comment} Comments</div>
        </div>
        </div>
    </div>
  )
}
