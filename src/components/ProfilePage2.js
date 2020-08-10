import React from 'react'
import './profpagestyle.css';
import './profpagestyles.css'

function ProfilePage2() {
    return (
        <div class="main">
            <div class="container-fluid">
                <div class="col-sm-3 left-sidebar">
                    <ul>
                        <li><a href="./dashboard.html" class="active">News Feed</a></li>
                        <li><a href="./settings.html" class="active">Settings</a></li>
                        <li><a href="./index.html">Logout</a></li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <div class="post col-sm-12" id="post_1">
                        <div class="row post-heading">
                            <div class="col-sm-12">
                                <a href="profile.html">
                                    <img src="assets/imgs/2.jpg" class="profile-picture pull-left"/>
                                    
                                    <span class="post-user-name">Maninder Kaur</span><br/>
                                   
                                    <small class="post-date text-mute">31th March, 2017 2:49PM</small>
                                </a>
                            </div>
                        </div>
                        <div class="row post-body">
                            <div class="col-sm-12">
This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.
                            </div>
                        </div>
                       
                    </div>
                    
                    <div class="post col-sm-12" id="post_2">
                        <div class="row post-heading">
                            <div class="col-sm-12">
                                <a href="profile.html">
                                    <img src="assets/imgs/3.jpg" class="profile-picture pull-left"/>
                                  
                                    <span class="post-user-name">Divyanshu Gupta</span><br/>
                                    
                                    <small class="post-date text-mute">31th March, 2017 2:49PM</small>
                                </a>
                            </div>
                        </div>
                        <div class="row post-body">
                            <div class="col-sm-12">
This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.

This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.

This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.
                            </div>
                        </div>
                        <div class="row post-action">
                            <ul class="post-action-menu">
                                
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_like_count_2">2142</span> Likes</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_comment_count_2">2172</span> Comments</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_share_count_2">200</span> Shares</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="post col-sm-12" id="post_3">
                        <div class="row post-heading">
                            <div class="col-sm-12">
                                <a href="profile.html">
                                    <img src="assets/imgs/5.jpg" class="profile-picture pull-left"/>
                                    
                                    <span class="post-user-name">Sourabh Thakur</span><br/>
                                
                                    <small class="post-date text-mute">31th March, 2017 2:49PM</small>
                                </a>
                            </div>
                        </div>
                        <div class="row post-body">
                            <div class="col-sm-12">
This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.
                            </div>
                        </div>
                        <div class="row post-action">
                            <ul class="post-action-menu">
                               
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_like_count_3">2142</span> Likes</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_comment_count_3">2172</span> Comments</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_share_count_3">200</span> Shares</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="post col-sm-12" id="post_4">
                        <div class="row post-heading">
                            <div class="col-sm-12">
                                <a href="profile.html">
                                    <img src="assets/imgs/4.jpg" class="profile-picture pull-left"/>
                                    &nbsp;
                                    <span class="post-user-name">Akshima</span><br/>
                                    &nbsp;
                                    <small class="post-date text-mute">31th March, 2017 2:49PM</small>
                                </a>
                            </div>
                        </div>
                        <div class="row post-body">
                            <div class="col-sm-12">
This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.
                            </div>
                        </div>
                        <div class="row post-action">
                            <ul class="post-action-menu">
                                <li><a href="javascript:void(0);" class="text-mute" onclick="like(4);">Like</a></li>
                                <li><a href="javascript:void(0);" class="text-mute" onclick="share(4);">Share</a></li>
                                <li><a href="javascript:void(0);" class="text-mute" onclick="comment(4);">Comment</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_like_count_4">2142</span> Likes</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_comment_count_4">2172</span> Comments</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_share_count_4">200</span> Shares</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="post col-sm-12" id="post_5">
                        <div class="row post-heading">
                            <div class="col-sm-12">
                                <a href="profile.html">
                                    <img src="assets/imgs/1.jpg" class="profile-picture pull-left"/>
                                    &nbsp;
                                    <span class="post-user-name">Shubham Kumar</span><br/>
                                    &nbsp;
                                    <small class="post-date text-mute">31th March, 2017 2:49PM</small>
                                </a>
                            </div>
                        </div>
                        <div class="row post-body">
                            <div class="col-sm-12">
This is the post body. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit. Lorem Ipsum Doler sit.
                            </div>
                        </div>
                        <div class="row post-action">
                            <ul class="post-action-menu">
                                <li><a href="javascript:void(0);" class="text-mute" onclick="like(5);">Like</a></li>
                                <li><a href="javascript:void(0);" class="text-mute" onclick="share(5);">Share</a></li>
                                <li><a href="javascript:void(0);" class="text-mute" onclick="comment(5);">Comment</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_like_count_5">2142</span> Likes</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_comment_count_5">2172</span> Comments</a></li>
                                <li class="pull-right"><a href="#" class="text-mute"><span id="post_share_count_5">200</span> Shares</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            )
}

export default (ProfilePage2)