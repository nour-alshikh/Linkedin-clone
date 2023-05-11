import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/home";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import RequireAuth from "./components/RequireAuth";

const App = (props) => {
    useEffect(() => {
        props.getUserAuth()
    }, [])
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<>
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    </>} />
                </Routes>
            </Router>
        </div>
    );

}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUserAuth: () => dispatch(getUserAuth()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);