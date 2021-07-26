import React from 'react';

const Main = () => {
    return (
        <React.Fragment>
            <div className="card">
                <img className="" src="./img/p1.jpg" alt="" />
                <div className="card-img-overlay">
                    <h1 className="text-light">iPhone 11</h1>
                    <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-light">Lots to love.less to spend <br />
                        starting at $399</p>
                    <p className="lead text-light">form $9.54/mo. or $229 with trade-in.</p>
                    <div>
                        <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learm more </a>
                        <a className="font ml-5" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Buy </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgba(192, 192, 192, 0.13)" }} className="card image">
                <img className="" src="./img/a3.jpg" alt="" />
                <div className="card-img-overlay">
                    <h1 className="text-dark text-right">iPhone 11</h1>
                    <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-right">Lots to love.less to spend
                        <br /> starting at $399</p>
                    <p className="lead text-dark text-right">form $9.54/mo. or $229 with trade-in.</p>
                    <div className="text-right">
                        <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learm more</a>
                        <a className="font ml-5" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Buy</a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgba(192, 192, 192, 0.13)" }} className="card image2">
                <img className="ml-auto" src="./img/a1.jpg" alt="" />
                <div className="card-img-overlay">
                    <h1 className="text-dark text-left">iPhone 11</h1>
                    <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-left">Lots to love.less to spend
                        <br /> starting at $399</p>
                    <p className="lead text-dark text-left">form $9.54/mo. or $229 with trade-in.</p>
                    <div className="text-left">
                        <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learm more</a>
                        <a className="font ml-5" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Buy</a>
                    </div>
                </div>
            </div>
            <form action="">
                <div style={{ margin: "20px" }} className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card form-card ">
                            <div className="card-body" style={{ backgroundColor: "rgba(192, 192, 192, 0.13)" }}>
                                <h1 className="text-dark text-center">iPhone 11</h1>
                                <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-center">Lots to
                                    love.less to spend <br /> starting at $399</p>
                                <p className="lead text-dark text-center">form $9.54/mo. or $229 with trade-in.</p>
                                <div className="text-center">
                                    <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learm more </a>
                                    <a className="font ml-5" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Buy </a>
                                </div>
                                <img className="" src="./img/a6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div style={{ backgroundColor: "rgba(192, 192, 192, 0.13)" }} className="card">
                            <div className="card-body">
                                <h1 className="text-dark text-center">iPhone 11</h1>
                                <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-center">Lots to
                                    love.less to spend <br /> starting at $399</p>
                                <p className="lead text-dark text-center">form $9.54/mo. or $229 with trade-in.</p>
                                <div className="text-center">
                                    <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learm more</a>
                                    <a className="font ml-5" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Buy</a>
                                </div>
                                <img src="/img/a4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 py-2">
                        <div style={{ backgroundColor: "rgba(192, 192, 192, 0.13)" }} className="card">
                            <div className="card-body">
                                <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-center"><big>Apple
                                    Card</big><br />Monthly Installments</p>
                                <p className="lead text-dark text-center">pay for your new Apple products over time<br />interest-free
                                    with Apple Card</p>
                                <div className="text-center">
                                    <a className="font" style={{ fontSize: "1.6em", color: "#3498db" }} href="">Learn more</a>
                                </div>
                                <img style={{ height: "auto" }} src="./img/ظz.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 py-2">
                        <div style={{ backgroundColor: "#2980b9" }} className="card">
                            <div className="card-body">
                                <h1 className="text-light text-center"><img style={{ width: "25px", height: "25px" }} src="/img/download.png"
                                    alt="" />tv+</h1>
                                <p style={{ fontSize: "1.6em", fontWeight: "bold" }} className="lead text-dark text-center"><big>TED
                                    LASSO</big><br />out of his league</p>
                                <div className="text-center">
                                    <a className="font" style={{ fontSize: "1em", color: "white" }} href="">watch now <i
                                        className="fas fa-play"></i></a>
                                </div>
                                <img style={{ height: "auto" }} src="./img/z1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </React.Fragment>
    )
}

export default Main;