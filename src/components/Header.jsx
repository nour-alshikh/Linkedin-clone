import { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components"
import { signOutAPI } from "../redux/actions";

const Header = (props) => {
    const test = useRef()
    const showSignOut = () => {
        test.current.classList.toggle('d-block')
    }

    return (
        <>
            <Navbar>
                <Container>
                    <Nav>
                        <Right>
                            <Logo>
                                <img src="/images/home-logo.svg" alt="" />
                            </Logo>
                            <Search>
                                <Icon>
                                    <img src="/images/search-icon.svg" alt="" />
                                </Icon>
                                <Input>
                                    <input type="text" placeholder="Search" />
                                </Input>
                            </Search>
                        </Right>
                        <Left>
                            <NavItemHome>
                                <Image>
                                    <img src="/images/nav-home.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">Home</p>
                                </Title>
                            </NavItemHome>
                            <NavItem className="d-none d-md-block">
                                <Image>
                                    <img src="/images/nav-network.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">My Network</p>
                                </Title>
                            </NavItem>
                            <NavItem>
                                <Image>
                                    <img src="/images/nav-jobs.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">Jobs</p>
                                </Title>
                            </NavItem>
                            <NavItem>
                                <Image>
                                    <img src="/images/nav-messaging.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">Messaging</p>
                                </Title>
                            </NavItem>
                            <NavItem>
                                <Image>
                                    <img src="/images/nav-notifications.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">Notification</p>
                                </Title>
                            </NavItem>
                            <NavItem>
                                <Image>
                                    {props.user ? (
                                        <img src={props.user.photoUrl} alt="" style={{
                                            width: "25px",
                                            height: "25px",
                                            borderRadius: "50%",
                                        }} />
                                    )
                                        : (

                                            <img src="/images/user.svg" alt="" style={{
                                                width: "25px",
                                                height: "25px",
                                                borderRadius: "50%",
                                            }} />
                                        )

                                    }

                                </Image>
                                <Title onClick={showSignOut}>
                                    <p className="m-0">Me</p>
                                    <span></span>
                                </Title>
                                <SignOut ref={test} onClick={() => props.signOut()}>
                                    <p className="m-0">Sign out</p>
                                </SignOut>
                            </NavItem>
                            <NavItem className="d-none d-md-block">
                                <Image>
                                    <img src="/images/nav-work.svg" alt="" />
                                </Image>
                                <Title>
                                    <p className="m-0">Work</p>
                                    <span></span>
                                </Title>
                            </NavItem>
                        </Left>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

const Navbar = styled.div`
background-color: white;
padding: 0;
min-height: 60px;
`;

const Container = styled.div`
max-width: 80%;
margin: auto;

`;
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`;
const Right = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
@media(max-width: 992px) {
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , 30%);
}
`;
const Logo = styled.div`
width: 45px;
`;
const Search = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
    background-color: #eee;
`;
const Icon = styled.div`
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
`;
const Input = styled.div`


    input{
        height: 35px;
        border: none;
        outline: none;
        padding: 15px;
        width: 250px;
    }

`;

const SignOut = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    padding: 5px 15px;
    width: 100px;
    border-radius: 4px;
    background-color: white;
    transition: 0.6s;
    &:hover{
        background-color: #eee;
    }
`;

const Left = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0;
padding: 0;
background-color: white;
@media(max-width: 992px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    ${SignOut}{
        top: -60%;
        left: -85%;
    }
}
`;
const NavItemHome = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid black;
padding: 5px 15px;
margin: 0 10px;
min-height: 60px;
`;
const NavItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5px 8px;
cursor: pointer;
position: relative;
`;
const Image = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
`;
const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
span{
    margin-top: 5px;
    margin-left: 5px;
    width: 5px;
    height: 5px;
    border: 5px solid transparent;
    border-top: 5px solid black;
}
`;

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
export default connect(mapStateToProps, mapDispatchToProps)(Header);