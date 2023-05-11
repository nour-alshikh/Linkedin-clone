import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getArticlesAPI } from "../redux/actions"
import { useEffect } from "react"
import ReactPlayer from "react-player"

const Main = ({ showModal, user, loading }) => {

    useEffect(() => {
        dispatch(getArticlesAPI())
    }, [])

    const articles = useSelector((state) => state.articlesState.articles)


    const dispatch = useDispatch();

    return (
        <>
            <Box>
                <div className="d-flex justify-contnet-start align-items-center px-3 py-2">
                    <Image>
                        {user ? (

                            <img style={{ width: "100%" }} src={user.photoURL} alt="" />
                        )
                            : (

                                <img src="/images/user.svg" alt="" />
                            )

                        }
                    </Image>
                    <Input onClick={showModal}>
                        <input type="text" placeholder="start a post" />
                    </Input>
                </div>
                <Buttons>
                    <Button>
                        <Icon>
                            <img src="/images/photo-icon.svg" alt="" />
                        </Icon>
                        <Name>
                            Photo
                        </Name>
                    </Button>
                    <Button>
                        <Icon>
                            <img src="/images/video-icon.svg" alt="" />
                        </Icon>
                        <Name>
                            video
                        </Name>
                    </Button>
                    <Button>
                        <Icon>
                            <img src="/images/event-icon.svg" alt="" />
                        </Icon>
                        <Name>
                            Event
                        </Name>
                    </Button>
                    <Button>
                        <Icon>
                            <img src="/images/article-icon.svg" alt="" />
                        </Icon>
                        <Name>
                            write article
                        </Name>
                    </Button>
                </Buttons>
                {
                    articles.length === 0 ? (<p className="text-center py-4 fw-bold">There are no articles....</p>) :
                        (
                            <Content>
                                {loading && <img src="images/loader.svg" style={{ width: "70px" }} />}
                                {articles.map((article, i) => {
                                    return (<PostBox key={i}>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center p-4">
                                                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={article.actor.image} alt="" />
                                                    <div className="d-flex justify-content-start flex-column align-items-start mx-3">
                                                        <p className="m-0 fw-bold">{article.actor.title}</p>
                                                        <p className="m-0 text-muted fs-6">{article.actor.date.toDate().toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle">
                                                <img style={{ padding: "15px" }} src="/images/ellipsis.svg" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="m-0 d-flex justify-content-start p-4">{article.description}</p>
                                            {article.shareImg &&
                                                <img style={{ width: "50%" }} src={article.shareImg} />
                                            }
                                            {article.video && <ReactPlayer width={"100%"} url={article.video} />}
                                        </div>

                                        <div className="d-flex justify-content-between aalign-itens-center">
                                            <div className="social w-25 m-auto p-4 d-flex justify-content-center align-items-center">
                                                <img src="/images/like-icon.svg" />
                                                <p className="m-0 text-muted ps-3 fs-6">Like</p>
                                            </div>
                                            <div className="social w-25 m-auto p-4 d-flex justify-content-center align-items-center">
                                                <img src="/images/comment-icon.svg" />
                                                <p className="m-0 text-muted ps-3 fs-6">Comment</p>
                                            </div>
                                            <div className="social w-25 m-auto p-4 d-flex justify-content-center align-items-center">
                                                <img src="/images/share-icon.svg" />
                                                <p className="m-0 text-muted ps-3 fs-6">Share</p>
                                            </div>
                                            <div className="social w-25 m-auto p-4 d-flex justify-content-center align-items-center">
                                                <img src="/images/send-icon.svg" />
                                                <p className="m-0 text-muted ps-3 fs-6">Send</p>
                                            </div>
                                        </div>
                                    </PostBox>)

                                })}
                            </Content>
                        )

                }

            </Box >

        </>
    )
}


const Box = styled.div`
background-color: #ffffff;
border-radius: 4px;
margin: 10px 0;
border: 1px solid #ddd;
height: 130px;
`

const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`
const Content = styled.div`
    font-size: larger;
    color: black;
    text-align: center;
`

const Input = styled.div`
padding: 0 10px;
    width: 100%;
input{
    outline: none;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 25px;
    width: 100%;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        background-color: #0000001b;
    }
}
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Icon = styled.div`

`

const Name = styled.div`

`

const PostBox = styled.div`
background-color: #ffffff;
border-radius: 4px;
margin: 10px 0;
border: 1px solid #ddd;
.social{
    transition: 200ms;
    border-radius: 3px;
    &:hover{
        background-color: #ddd;
    }
}
.circle{
    width: 55px;
    height: 55px;
    transition: 200ms;
    border-radius: 50%;
    background-color: transparent;
    &:hover{
        background-color: #ddd;
    }
}
`

export default Main