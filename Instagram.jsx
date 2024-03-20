import React, {useState, useEffect, useContext} from "react";
import MyComponent from "./useEffect()/MyComponent_width.jsx";
import cat from './cat.jpeg'
import user from './UserIcon.png'

function Instagram(){


    useEffect(() =>{
        const div = document.getElementById('post');
        const div2 = document.getElementById('news');
        for (let i = 0; i < 3; i++) {
            div.innerHTML += `<div className="post">
            <div className="post-head">
                <div className="post-circle">
                    <img src={user} alt="user"></img>

                    <h2 class="account">account</h2>
                </div>
                <div className="post-info">
                    <p>...</p>
                </div>
            </div>
            <div className="post-pic-vid">
                <img src={cat} alt='a cat'></img>
                <div className="post-icon">
                    <div className="three-icon">
                        <button className="three-icon-button"><span class="material-symbols-outlined">
favorite
</span></button>
                        <button className="three-icon-button"><span class="material-symbols-outlined">
mode_comment
</span></button>
<button className="three-icon-button"><span class="material-symbols-outlined">
send
</span></button>

                        <button className="three-icon-button special"><span class="material-symbols-outlined">
bookmark
</span></button>
                    </div>
            </div>
            <div className="likes">
                <div className="likes-row">
                    <p><span className="bold"># likes</span></p>
                    <p><span className="bold">Likes</span></p>
                </div>

            <div className="post-content">
                <p><span className="bold">Account</span></p>
                <p>This is a content...</p>
            </div>
            </div>
            </div>
            
            
            
        </div>`;



            
          }
    }, [])

    return(
        <div className="instagram-page">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <div className="head-page">
                <h class="logo">Instagram</h>
                <div className="symbol">
                    <button className="three-icon-button"><span class="material-symbols-outlined">
favorite
</span></button>
                    <button className="three-icon-button"><span class="material-symbols-outlined">
chat_bubble
</span></button>
                </div>
            </div>

            <div className="news" id ='news'>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>huydc</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>test</p>
                </div>
                <div className="wrapper">

                    <div className="circle">
                        <img src={user} alt="avatar" className="avatar">
                        </img>

                    </div>
                    <p>test</p>
                </div>

                
            </div>
                
            <div className="post">
                <div className="post-head">
                    <div className="post-circle">
                        <img src={user} alt="user"></img>

                        <h2 class="account">account</h2>
                    </div>
                    <div className="post-info">
                        <p>...</p>
                    </div>
                </div>
                <div className="post-pic-vid">
                    <img src={cat} alt='a cat'></img>
                    <div className="post-icon">
                        <div className="three-icon">
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    favorite
    </span></button>
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    mode_comment
    </span></button>
    <button className="three-icon-button"><span class="material-symbols-outlined">
    send
    </span></button>

                            <button className="three-icon-button special"><span class="material-symbols-outlined">
    bookmark
    </span></button>
                        </div>
                </div>
                <div className="likes">
                    <div className="likes-row">
                        <p><span className="bold"># likes</span></p>
                        <p><span className="bold">Likes</span></p>
                    </div>

                <div className="post-content">
                    <p><span className="bold">Account</span></p>
                    <p>This is a content...</p>
                </div>
                </div>
                </div>
                
                
                
            </div>

            <div className="post">
                <div className="post-head">
                    <div className="post-circle">
                        <img src={user} alt="user"></img>

                        <h2 class="account">account</h2>
                    </div>
                    <div className="post-info">
                        <p>...</p>
                    </div>
                </div>
                <div className="post-pic-vid">
                    <img src={cat} alt='a cat'></img>
                    <div className="post-icon">
                        <div className="three-icon">
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    favorite
    </span></button>
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    mode_comment
    </span></button>
    <button className="three-icon-button"><span class="material-symbols-outlined">
    send
    </span></button>

                            <button className="three-icon-button special"><span class="material-symbols-outlined">
    bookmark
    </span></button>
                        </div>
                </div>
                <div className="likes">
                    <div className="likes-row">
                        <p><span className="bold"># likes</span></p>
                        <p><span className="bold">Likes</span></p>
                    </div>

                <div className="post-content">
                    <p><span className="bold">Account</span></p>
                    <p>This is a content...</p>
                </div>
                </div>
                </div>
                
                
                
            </div>

            <div className="post">
                <div className="post-head">
                    <div className="post-circle">
                        <img src={user} alt="user"></img>

                        <h2 class="account">account</h2>
                    </div>
                    <div className="post-info">
                        <p>...</p>
                    </div>
                </div>
                <div className="post-pic-vid">
                    <img src={cat} alt='a cat'></img>
                    <div className="post-icon">
                        <div className="three-icon">
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    favorite
    </span></button>
                            <button className="three-icon-button"><span class="material-symbols-outlined">
    mode_comment
    </span></button>
    <button className="three-icon-button"><span class="material-symbols-outlined">
    send
    </span></button>

                            <button className="three-icon-button special"><span class="material-symbols-outlined">
    bookmark
    </span></button>
                        </div>
                </div>
                <div className="likes">
                    <div className="likes-row">
                        <p><span className="bold"># likes</span></p>
                        <p><span className="bold">Likes</span></p>
                    </div>

                <div className="post-content">
                    <p><span className="bold">Account</span></p>
                    <p>This is a content...</p>
                </div>
                </div>
                </div>
                
                
                
            </div>

            <div id="post">
            </div>


                <nav className="nav">
                    <ul className="butt">
                        <li className="nav-button">
                            <button className="nav-but">
                                <span class="material-symbols-outlined size-40">
home
</span>
                            </button>
                        </li>
                        <li className="nav-button">
                            <button className="nav-but">
                            <span class="material-symbols-outlined">
search
</span>
                            </button>
                        </li>
                        <li className="nav-button">
                            <button className="nav-but">
                                <span class="material-symbols-outlined">
add_box
</span>
                            </button>
                        </li>
                        <li className="nav-button">
                            <button className="nav-but">
                                <span class="material-symbols-outlined">
video_call
</span>
                            </button>
                        </li>
                        <li className="nav-button">
                            <button className="nav-but">
                                <span class="material-symbols-outlined">
account_circle
</span>
                            </button>
                        </li>
                    </ul>
                </nav>


        </div>
    )
}

export default Instagram