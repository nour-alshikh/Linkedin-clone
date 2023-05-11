import { connect } from "react-redux";
import { signOutAPI } from "../redux/actions";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = (props) => {
    return (
        <>
            <Header user={props.user} />
            <Landing />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAPI()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);