import { LoadPosts } from "../store/actions/PostAction"
import { connect } from "react-redux"
import react, {useEffect} from "react"



const mapStateToProps =( {postState}) =>
{
  return { postState}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchPosts:()=> dispatch(LoadPosts())
  }
}


const Posts = (props) => {
  useEffect(()=>{
    props.fetchPosts()
  }, [])
  return (
    <div>
      { 
      props.postState.posts.map((post)=>(
        <div>
        <ul>{post.name}</ul>
        <img src= {post.image} alt="post"/>
        </div>
      )

      )} 
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)