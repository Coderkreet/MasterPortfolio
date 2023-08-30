import React from 'react'
import  projectimg from "../assets/image/project-management.png";
import  cover from "../assets/logo/Apple MacBook Air Silver.png";
import NavBar from '../NavBar';
import "./ProjectCard.css"
const Project = () => {
  return (
    <div>
      <NavBar/>
      <div data-Aos="fade-up" className='flex md:flex-row md:mt-10 md:max-w-[1080px] gap-x-20 md:w-full md:mx-auto md:justify-center flex-col'>
      <img src={projectimg} width={"350px"} alt=""/>

      <div className='flex flex-col md:w-[35rem] md:gap-y-20 gap-y-10 mt-7 items-center'>
        <h1 className='md:text-[4rem] text-[2.4rem] text-[#001c55] font-bold'>Projects</h1>
      <p className='font-bold  text-[1.3rem] text-center text-[#7f8daa]'>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science
         projects and deploy them to web applications using cloud infrastructure.</p>
      </div>

      </div>
    

<h1 data-Aos="fade-up" className='text-[2.4rem] mt-10 flex justify-center text-[#001c55] font-bold '>My Recent Works</h1>
<div className='md:flex flex-col mt-10 max-w-[1080px] gap-x-20 w-full mx-auto justify-center'>
  <div className=' text-[1.3rem] font-bold text-[#7f8daa] text-center justify-center flex  '>
    <p>Here are a few projects I've worked on recently.</p>
  </div>

  <div className='flex gap-10 flex-wrap justify-center mt-10'>
    
    <div data-Aos="fade-left" class="card md:w-[650px]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
  


  <div data-Aos="fade-left" class="card ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
  <div data-Aos="fade-right" class="card">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
  <div data-Aos="fade-right" class="card">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

  </div>
</div>

   
    </div>
  )
}

export default Project
