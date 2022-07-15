import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
        <img src='https://i.pinimg.com/550x/f5/6b/ae/f56baef86aed6c261c422402aab59065.jpg'></img>
        <div>
            { props.message }
        </div>
        <div>
          <span> { props.likes} </span>
        </div>
    </div>
  )
}

export default Post;