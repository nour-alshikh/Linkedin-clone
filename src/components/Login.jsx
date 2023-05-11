import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { signInAPI } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user)

  return (
    <>
      <Nav>
        {user && navigate("/home")}
        <Container>
          <Logo>
            <Link to={"/"}>
              <img src="/images/login-logo.svg" alt="" />
            </Link>
          </Logo>
          <Btns>
            <Join>
              Join now
            </Join>
            <Sign>
              Sign in
            </Sign>
          </Btns>
        </Container>
      </Nav>
      <Landing>
        <LoginLink>
          <Title>
            Welcome to your professional community
          </Title>
          <Button onClick={() => dispatch(signInAPI())}>
            <img src="/images/google.svg" alt="" />
            <p>Sign in with Google</p>
          </Button>
        </LoginLink>
        <Image>
          <img src="/images/login-hero.svg" alt="" />
        </Image>
      </Landing>
    </>
  )
};
const Nav = styled.nav`
  padding:20px 15px;
  width:100%;`

const Container = styled.div`
  width:65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`
const Logo = styled.div`
  width: 150px;
  cursor: pointer;
`
const Btns = styled.div`
  dispay:flex;
  justify-content: space-between;
  @media (max-width: 768px){
    display: none;
  }
`
const Join = styled.button`
  background-color: transparent;
  padding: 10px 25px;
  outline: none;
  border: none;
  margin: 0 10px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  transition: 0.6s;
  &:hover {
    border-radius: 50px;
    background-color: #eee;
  }`
const Sign = styled.button`
  padding: 10px 25px;
  outline: 0;
  border: 2px solid #0a66c2;
  border-radius: 50px;
  font-weight: 700;
  color: #0a66c2;
  transition: 0.6s;
  &:hover {
    background-color: #0a66c2;
    color: #f5f5f5;
  }`
const Landing = styled.div`
  display:flex;
  justify-content: space-around;
  flex-direction: column-reverse;
  align-items: center;
  @media(min-width: 992px){
    flex-direction: row;
  }
`
const LoginLink = styled.div`
  @media(max-width: 992px){
    text-align:center;
  }`
const Title = styled.p`
  color: #0a66c2;
    font-size: 40px;
    margin: 40px 0 80px 180px;
      @media(max-width: 992px){
    margin: 0px;
  }`
const Button = styled.button`
    background-color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    margin-left: 180px;
    padding: 10px 70px;
    border: 3px solid #555;
    align-items: center;
    cursor:pointer;
    transition:0.6s;
    > p{
      margin:0;
      color: #555;
      font-size: 16px;
      font-weight: 500; 
    }
    &:hover{
    background-color: #eee;
    }
    @media(max-width: 992px){
    margin: 20px auto;
  }
`
const Image = styled.div`
  width: 75%;
  padding: 0px 150px;
  `

export default Login;