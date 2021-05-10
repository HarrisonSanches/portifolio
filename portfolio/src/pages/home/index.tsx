// import  React from "react";
import React, { CSSProperties } from "react";

import logo from '../../assets/logo.svg';
import './style.css';
import foto from "../../assets/img/foto.png"
import capa from "../../assets/img/capa.gif"
// import './scripts.js';

// import React, { CSSProperties } from "react";


function Home(): JSX.Element {

    const myStyles: CSSProperties = {
        marginTop: 550,
    }

  return (
    <>
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Stylish Portfolio - Start Bootstrap Template</title>
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="style.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        {/* <a className="menu-toggle rounded" href="#"><i className="fas fa-bars"></i></a>
        <nav id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand"><a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a></li>
                <li className="sidebar-nav-item"><a className="js-scroll-trigger" href="#page-top">Home</a></li>
                <li className="sidebar-nav-item"><a className="js-scroll-trigger" href="#about">About</a></li>
                <li className="sidebar-nav-item"><a className="js-scroll-trigger" href="#services">Services</a></li>
                <li className="sidebar-nav-item"><a className="js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                <li className="sidebar-nav-item"><a className="js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
        </nav> */}
        <header className="masthead d-flex">
            <div className="container text-center my-auto">
                {/* <h1 className="mb-1"> </h1>
                <h3 className="mb-5"><em></em></h3> */}
                <a style={myStyles} className="btn btn-primary btn-xl js-scroll-trigger " href="#services">Saiba Mais</a>
            </div>
            <div className="overlay"></div>
        </header>
        {/* <section className="content-section bg-light" id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                        <p className="lead mb-5">
                            This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
                            <a href="https://unsplash.com/">Unsplash</a>
                            !
                        </p>
                        <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
                    </div>
                </div>
            </div>
        </section> */}
        <section className="content-section bg-primary text-white text-center" id="services">
            <div className="container">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">Tecnologias</h3>
                    <h2 className="mb-5">Conhecimento em:</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-screen-smartphone"></i></span>
                        <h4><strong>Linguagens</strong></h4>
                        <p className="text-faded mb-0">Python, JavaScript, C++, Java, SQL, PHP, HTML, CSS </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-pencil"></i></span>
                        <h4><strong>Machine Learning</strong></h4>
                        <p className="text-faded mb-0">Redes Neurais, SVM, Regressão Linear, Árvores de decisão, 
                        PCA, entre outros</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-like"></i></span>
                        <h4><strong>Cloud Computing</strong></h4>
                        <p className="text-faded mb-0">ROpenStack</p>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-mustache"></i></span>
                        <h4><strong>Cloud Computing</strong></h4>
                        <p className="text-faded mb-0">OpenStack</p>
                    </div> */}
                </div>
            </div>
        </section>
        <section className="callout">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-6 mx-auto mb-5">
                        <h2 >
                            Welcome to
                            <em>your</em>
                            next website!
                        </h2>
                        <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</a>
                    </div>
                    <div className="col-lg-6 mx-auto mb-5 " >
                       <img src={foto} className = "img-fluid" alt="Imagem responsiva" />
                    </div>
                </div>
            </div>
        </section>
        <section className="content-section" id="portfolio">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Portfolio</h3>
                    <h2 className="mb-5">Recent Projects</h2>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Stationary</div>
                                    <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="/home/sanches/projects/Campus-ON-Demand/campus-on-demand/src/assets/img/portfolio-1.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Ice Cream</div>
                                    {/* preciso referencia a img la em cima import */}
                                    <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="../../assets/img/portfolio-2.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Strawberries</div>
                                    <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="./assets/img/portfolio-3.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Workspace</div>
                                    <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="../../assets/img/portfolio-4.jpg" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="content-section bg-primary text-white">
            <div className="container text-center">
                <h2 className="mb-4">The buttons below are impossible to resist...</h2>
                <a className="btn btn-xl btn-light mr-4" href="#!">Click Me!</a>
                <a className="btn btn-xl btn-dark" href="#!">Look at Me!</a>
            </div>
        </section>
        <div className="map" id="contact">
            <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
            <br />
            <small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a></small>
        </div>
        <footer className="footer text-center">
            <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="#!"><i className="icon-social-github"></i></a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Your Website 2021</p>
            </div>
        </footer>
        <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top"><i className="fas fa-angle-up"></i></a>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        <script src="scripts.js"></script>
    </body>
    </>
  )
};

export default Home;