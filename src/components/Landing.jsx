import { useState } from "react"
import LeftSide from "./LeftSide"
import Main from "./Main"
import PostModal from "./PostModal"
import RightSide from "./RightSide"
import styled from "styled-components"
import { connect } from "react-redux"

const Landing = ({ user, loading }) => {

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }


    return (
        <>
            <Container>
                <Box>
                    <LeftSide user={user} />
                </Box>
                <Main showModal={handleModal} user={user} loading={loading} />
                <PostModal modal={modal} hideModal={handleModal} user={user} />
                <Box>
                    <RightSide />
                </Box>
            </Container>
        </>
    )
}

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-gap: 15px;
padding: 20px;
`

const Box = styled.div`
@media (max-width: 992px) {
    display: none;
}
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        loading: state.articlesState.loading,
    };
};
export default connect(mapStateToProps)(Landing);