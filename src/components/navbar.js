import React from 'react'


function navbar() {
    return (
    
        <section class="menu menu1 cid-sAToTck0s3" once="menu" id="menu1-1g">


        <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div class="container">
                <div class="navbar-brand">
                    <span class="navbar-logo">
                        <a href="https://codewithct.web.app">
                            <img src="assets/images/logo.png" alt="codewithct"/>
                        </a>
                    </span>

                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <div class="icons-menu">
                        <a class="iconfont-wrapper" href="https://linkedin.com/in/tiwaric351" target="_blank" rel="noreferrer">
                            <span class="p-2 mbr-iconfont socicon-linkedin socicon"></span>
                        </a>
                        <a class="iconfont-wrapper" href="https://twitter.com/tiwaric351" target="_blank" rel="noreferrer">
                            <span class="p-2 mbr-iconfont socicon-twitter socicon"></span>
                        </a>
                        <a class="iconfont-wrapper" href="https://github.com/codewithct" target="_blank" rel="noreferrer">
                            <span class="p-2 mbr-iconfont socicon-github socicon"></span>
                        </a>

                    </div>

                </div>
            </div>
        </nav>
    </section>
    
    )
}

export default navbar
