import React from 'react';


const Header = () => {
    return (
        <React.Fragment>
            <nav style={{ backgroundColor: "rgba(3, 3, 3, 0.808)", height: "7vh" }}
                className="navbar navbar-expand-lg navbar-light sticky-top">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mycollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="navbar-toggler" data-toggle="collapse">
                    <span><img style={{ width: "25px" }} src="/img/download.png" alt="" /></span>
                </button>
                <button className="navbar-toggler" data-toggle="collapse">
                    <span><i style={{ fontSize: "1.2em", color: "white" }} className="fas fa-shopping-bag "></i></span>
                </button>
                <div className="collapse navbar-collapse navt" id="mycollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item c1">
                            <a href="" className="nav-link"><img style={{ width: "18px", marginTop: "-10px" }} src="/img/download.png"
                                alt="" /></a>
                        </li>
                        <li className="nav-item c2">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>Mac</a>
                        </li>
                        <li className="nav-item c3">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>iPad</a>
                        </li>
                        <li className="nav-item c4">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>iPhone</a>
                        </li>
                        <li className="nav-item c5">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>Watch</a>
                        </li>
                        <li className="nav-item c6">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>TV</a>
                        </li>
                        <li className="nav-item c7">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>Music</a>
                        </li>
                        <li className="nav-item c8">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}>Support</a>
                        </li>
                        <li className="nav-item c9">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}><i
                                style={{ fontSize: "1.2em" }} className="fas fa-search"></i></a>
                        </li>
                        <li className="nav-item c10">
                            <a href="" className="nav-link" style={{ textDecoration: "none", color: "rgb(189, 189, 189)" }}><i
                                style={{ fontSize: "1.2em" }} className="fas fa-shopping-bag"></i></a>
                            <div id="part-shop"  className="open-div">
                                <span style={{ color: "#b1b1c0", cursor: "pointer" }} id="header">Your Bag is empty.</span>
                                <hr/>
                                    <div className="stateOne">
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span style={{ cursor: "pointer" }} id="LOGIN"><a href="/users/login">LOGIN</a></span>
                                    </div>
                                <hr/>
                                <div className="stateOne">
                                    <i className="fas fa-registered"></i>
                                    <span style={{ cursor: "pointer" }} id="REGISTER"><a href="/users/register">REGISTER</a></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="minbox2">
                <form action="mains2 ">
                    <div className="my-row2 d-flex flex-row justify-content-center flex-wrap">
                        <span className="p-3 text-center"><a href="">Evaluate COVID-19 symptoms and understand next steps</a></span>
                    </div>
                </form>
            </section>
            <section>
                <form action="">
                    <div className="my-row3 d-flex justify-content-center text-center flex-wrap">
                        <span style={{ fontSize: ".9em" }} className="p-2"><a href="">Shop online</a> and get free, no‑contact delivery,
                            Specialist help, and more.</span>
                    </div>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Header;