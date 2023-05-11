import styled from "styled-components"
const RightSide = () => {
    return (
        <>
            <div>
                <Box>
                    <div className="d-flex justify-content-between align-items-center p-2 ">
                        <p className="m-0">Add to your feed</p>
                        <img src="/images/feed-icon.svg" alt="" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center px-3 py-2">
                        <div className="circle">
                            <p className="fs-2 m-0">#</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="m-0 fw-bold">#Linkedin</p>
                            <div className="follow px-3 py-1 rounded-3">
                                Follow
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center px-3 py-2">
                        <div className="circle">
                            <p className="fs-2 m-0">#</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="m-0 fw-bold">#Linkedin</p>
                            <div className="follow px-3 py-1 rounded-3">
                                Follow
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center p-2">
                        <p style={{ color: "rgb(10 102 194)" }} className="m-0">
                            View all recommendations
                        </p>
                        <img src="/images/right-icon.svg" alt="" />
                    </div>
                </Box>
                <Box>
                    <Image>
                        <img style={{ width: "100%" }} src="/images/banner-image.jpg" alt="" />
                    </Image>
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
.circle{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(10 102 194);
    width: 50px;
    height: 50px;
    border-radius: 50%;
        background-color: aliceblue;
        margin-right: 10px;
}
.follow{
    border: 2px solid black;
    width: fit-content;
    display: inline;

}
`;

const Image = styled.div`
padding: 10px;`


export default RightSide