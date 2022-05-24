import React from 'react'

function Card(props) {

    const isText = (s) => {
        if (s == null) return s;
        else if (s.length >=75) return s.substring(0,61);
        else return s;


    }
    return (
        <>

            <div className='card-section2-main'>
                <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Latest<div style={{ background: "red", display: "inline-block", width: "62rem  ", height: "5px", marginLeft: "3px" }}></div></h4>
                { props.data?(
                <div className="row">

                    <div className="col-md-3 ">

                        <div className='card-section2 my-2' style={{ maxWidth: "17rem" }} >
                            <img src={props.data[0].urlToImage} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>
                                 {isText(props.data[0].title)}...
                                </h6>
                                <p>{props.data[0].author}<span > {props.data[0].publishedAt}</span></p>
                            </div>
                        </div>


                    </div>



                    <div className="col-md-3">

                        <div className='card-section2 my-2' style={{ maxWidth: "17rem" }} >
                            <img src={props.data[1].urlToImage} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{isText(props.data[1].title)}...
                                </h6>
                                <p>{props.data[1].author} <span >{props.data[1].publishedAt}</span></p>
                            </div>
                        </div>


                    </div>


                    <div className="col-md-3">

                        <div className='card-section2 my-2' style={{ maxWidth: "17rem" }} >
                            <img src={props.data[2].urlToImage} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{
                                    isText(props.data[2].title)
                                }...
                                </h6>
                                <p>{props.data[2].author}<span > {props.data[2].publishedAt}</span></p>
                            </div>
                        </div>


                    </div>


                    <div className="col-md-3">

                        <div className='card-section2 my-2' style={{ maxWidth: "17rem" }} >
                            <img src={props.data[3].urlToImage} alt="" className='img-fluid card-img-top' />
                            <div className="card-body-section2 my-2">
                                <h6>{isText(props.data[3].title)}...
                                </h6>
                                <p>{props.data[3].author} <span >{props.data[3].publishedAt}</span></p>
                            </div>
                        </div>


                    </div>


                </div>
                ):(<></>)
                }
            </div>

        </>
    )
}





export default Card
