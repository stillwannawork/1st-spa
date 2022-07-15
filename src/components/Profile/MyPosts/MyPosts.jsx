import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>New post</button>
        </div>
        <div className={s.posts}>
            <Post message={'Hi, how are you?'} likes={'5'}/>
            <Post message={"It's my first project"} likes={'6'}/>
        </div>
    </div>
  )
}

export default MyPosts;