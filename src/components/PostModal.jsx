import { useState } from "react"
import ReactPlayer from "react-player";
import styled from "styled-components"

import { Timestamp } from "firebase/firestore"
import { connect } from "react-redux";
import { postArticleAPI } from "../redux/actions";

const PostModal = ({ modal, hideModal, user, postArticles }) => {

    const [post, setPost] = useState("");
    const [assetArea, setAssetArea] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [sharedImage, setSharedImage] = useState("");


    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`Not an image , the file is a ${typeof image}`)
            return;
        } else {
            setSharedImage(image)
        }

    }

    const switchAssetArea = (area) => {
        setSharedImage("");
        setVideoLink("")
        setAssetArea(area)
    };

    const reset = (e) => {
        setPost("")
        setAssetArea("")
        setSharedImage("")
        setVideoLink("")
        hideModal(e)
    }

    const handlePostArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
        const payload = {
            image: sharedImage,
            video: videoLink,
            description: post,
            user: user,
            timestamp: Timestamp.now()
        }
        postArticles(payload);
        reset(e);
    }

    return (
        <>
            {modal && <Container>
                <Modal>
                    <div className="title d-flex justify-content-between align-items-center border-bottom p-3">
                        <p className="m-0 fw-bold fs-4 text-muted">Create post</p>
                        <div className="circle d-flex justify-content-center align-items-center">
                            <img className="close" onClick={(e) => reset(e)} src="/images/close-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-3">
                        <Image>
                            {user ? (

                                <img style={{ width: "100%" }} src={user.photoURL} alt="" />
                            )
                                : (

                                    <img src="/images/user.svg" alt="" />
                                )

                            }
                        </Image>
                        {user ? (

                            <p className="m-0 fw-bold fs-4 px-3 my-4">{user.displayName}</p>
                        )
                            : (

                                <p className="m-0 fw-bold fs-4 px-3 my-4">Name</p>
                            )

                        }

                    </div>
                    <Form className="px-3">
                        <textarea placeholder="What do you want to talk about?" className="p-3" autoFocus value={post} onChange={(e) => setPost(e.target.value)} />
                        {
                            assetArea === "image" ? (
                                <InputImage>
                                    <input
                                        type="file"
                                        name="image"
                                        id="file"
                                        style={{ display: "none" }}
                                        onChange={handleChange}
                                    />
                                    <p>
                                        <label
                                            style={{
                                                display: "block",
                                                marginBottom: "15px",
                                                cursor: "pointer",
                                                textAlign: "center"
                                            }}
                                            className="text-muted pt-3"
                                            htmlFor="file"
                                        >
                                            Select An Image to share
                                        </label>
                                    </p>
                                    {
                                        sharedImage && (
                                            <div className="text-center">
                                                <img style={{ width: "300px" }} src={URL.createObjectURL(sharedImage)} alt="img" />
                                            </div>
                                        )
                                    }
                                </InputImage>
                            ) : (
                                assetArea === "media" && (
                                    <>
                                        <input
                                            type="text"
                                            style={{ width: "100%", height: "40px", outline: "none", border: "none" }}
                                            value={videoLink}
                                            className="border-bottom p-4"
                                            onChange={(e) => setVideoLink(e.target.value)}
                                            placeholder="Please enter video link"
                                        />
                                        {videoLink && (
                                            <ReactPlayer width="100%" url={videoLink} />
                                        )}
                                    </>
                                )
                            )
                        }
                    </Form>
                    <Buttons className="p-3">
                        <div className="d-flex justify-content-center align-content-center">
                            <AssetButton onClick={() => switchAssetArea("image")}>
                                <img src="/images/photo-icon.svg" alt="" />
                            </AssetButton>
                            <AssetButton onClick={() => switchAssetArea("media")}>
                                <img src="/images/video-icon.svg" alt="" />
                            </AssetButton>

                        </div>
                        {
                            !post ? (
                                <button disabled className="disabled">
                                    Post
                                </button>
                            ) : (
                                <button onClick={(e) => handlePostArticle(e)}>
                                    Post
                                </button>
                            )
                        }

                    </Buttons>
                </Modal>
            </Container>}
        </>
    )
}

const Container = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: 0.5s;
.title{

}
.circle{
    cursor: pointer;
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

const Modal = styled.div`
    background-color: white;
    border-radius: 4px;
    width: 50%;
`

const Image = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`

const Form = styled.div`
textarea{
    width: 100%;
    height: 100px;
    border: 1px solid #eee;
    outline: none;
}
`

const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
button{
    color: white;
    background-color: #0a66c2;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    transition: 0.4s;
    &:hover{
        background-color: #084f95;
    }
}
.disabled{
        background-color: #0a66c252;
        cursor: not-allowed;
        &:hover{
            background-color: #0a66c252;

        }
}
img{
    cursor: pointer;
    padding: 0 10px;
}
`

const InputImage = styled.div`
`

const AssetButton = styled.div`
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        postArticles: (payload) => dispatch(postArticleAPI(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);