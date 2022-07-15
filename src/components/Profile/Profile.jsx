import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
  return (
    <div>
        <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt={'there-is-a-beach'}></img>
        <div>
            ava + description + condition zero
        </div>
        <div>
            <MyPosts />
        </div>
    </div>
  )
}

export default Profile;