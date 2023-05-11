import styled from "styled-components"
const LeftSide = ({ user }) => {
    return (
        <>
            <div>
                <Box>
                    <Image>
                        <img style={{ width: "100%" }} src="/images/card-bg.svg" alt="" />
                    </Image>
                    <Photo>
                        {user ? (

                            <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={user.photoURL} alt="" />
                        )
                            : (

                                <img src="/images/photo.svg" alt="" />
                            )

                        }
                    </Photo>
                    {user ? (

                        <p className="border-bottom name">Welcome, {user.displayName}</p>
                    )
                        : (

                            <p className="border-bottom name">Welcome, There</p>
                        )

                    }

                    <div className="d-flex justify-content-between py-3 border-bottom px-2">
                        <div>
                            <span className="text-muted fs-6">Connections</span>
                            <p className="m-0 fw-bold">Grow your network</p>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </div>
                    <div className="p-2 d-flex justify-content-start align-items-center">
                        <img src="/images/item-icon.svg" alt="" />
                        <p className="d-inline m-0 fw-bold">
                            My items
                        </p>
                    </div>
                </Box>
                <Box>
                    <div className="">
                        <p className="fw-bold m-0 px-3 py-2">Groups</p>
                        <div className="d-flex justify-content-between align-items-center px-3 py-2">
                            <p className="fw-bold m-0 ">Events</p>
                            <img src="/images/plus-icon.svg" alt="" />
                        </div>
                        <p className="fw-bold border-bottom px-3 py-2 m-0">Features</p>
                        <p className="text-muted px-3 py-3 m-0">Discover more</p>
                    </div>
                </Box>
            </div>
        </>
    )
}

const Box = styled.div`
background-color: white;
border-radius: 4px;
margin: 10px 0;
border: 1px solid #ddd;
.name{
    text-align: center;
    font-weight: 700;
    margin: 0;
    padding-bottom: 20px;
}
`;
const Image = styled.div`
width: 100%;
overflow: hidden;
`;
const Photo = styled.div`
display: grid;
justify-items: center;
align-items: center;
width: 90px;
height: 90px;
border-radius: 50%;
background-color: white;
position: relative;
right: -50%;
transform: translate(-50%,-50%);
`;

export default LeftSide