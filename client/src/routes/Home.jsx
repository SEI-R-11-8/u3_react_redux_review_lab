import { useEffect } from "react";
import { connect } from "react-redux";
import { LoadAllPosts } from "../store/actions/PostActions";
import PostPreview from "../components/PostPreview";

const mapStateToProps = (state) => {
    return {
        postState: state.postState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        LoadAllPosts: () => dispatch(LoadAllPosts())
    };
};

const Home = (props) => {
    useEffect(() => {
        props.LoadAllPosts();
    }, []);
    
    return (
        <div>
            <h2>Home Page</h2>
            {props.postState.posts.map((index) => (
                <PostPreview 
                    key={index._id}
                    post={index} 
                    push={props.history.push}
                />
            ))}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);