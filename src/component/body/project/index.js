import React from 'react';
import img1 from '../../../assets/Pp1.png'
import img2 from '../../../assets/pp2.png'
import Projectcard from './project-card';
import  './project.css';
import Separator from '../../common/social-contact/seperator';
function Project() {
    const data= [
        {
            id:1,
            title:"Random Project 1: Flipkart clone",
            about:"This a random project which I have been experimenting to get better grip on frontend.I just tried to create a Flipkart clone home page. And I am also working on this page currently, to give it a better look and add more options.",
            tags:["HTML","CSS","Js"],
            demo:"https://nikitalodha25.github.io/Flipkart-clone/",
            github:'https://nikitalodha25.github.io/Flipkart-clone/',
            image:img1,
        },
        {
            id:1,
            title:"Random Project 2: Spotify clone",
            about:"This a random project which I have been experimenting to get better grip on frontend.This a clone of Spotify which contains my favourite songs, I have added 10 songs here which can be played in a loop.",
            tags:["HTML","CSS","Js"],
            demo:" https://nikitalodha25.github.io/Spotify-clone/",
            github:' https://nikitalodha25.github.io/Spotify-clone/',
            image:img2,
        },
    ];
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {
                    data.map((project)=>{
                        return <Projectcard project={project}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Project;
