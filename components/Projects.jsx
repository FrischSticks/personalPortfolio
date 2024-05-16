import React from 'react';
import fitnessAppImg from '../public/images/fitnessApp.png';
import trvlCreativeLogo from '../public/images/trvlCreativeLogo.jpg'
import trvlTokenImg from '../public/images/trvlTokenFun.png'
import wildsideCustomTaxImg from '../public/images/wildsideCustomTaxidermy.jpg'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='w-full mt-[60%] max-w-fit mx-10 lg:mt-[100%] xl:mt-[60%] scroll-mt-36'>
        <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>My Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
            
            <ProjectCard
                title='Frische Fitness App'
                bgImage={fitnessAppImg}
                toolset='React — Material UI — Rapid API'
                btn1URL='https://frische-fitness.netlify.app/'
                btn2URL='https://github.com/FrischSticks/fitnessApp#fitnessapp'
                btn1Text='View Site'
                btn2Text='View Code'
            />


            <ProjectCard 
                title='TRVL Creative Company'
                bgImage={trvlCreativeLogo}
                toolset='Owner (I do a bit of everything)'
                btn1URL='https://www.trvlcreative.com'
                btn2URL= 'https://trvlcreative.com/blogs/trvl-with-us/trvl-request-form'
                btn1Text='View Site'
                btn2Text='TRVL ✈'
            />

            <ProjectCard 
                title='$TRVL Token'
                bgImage={trvlTokenImg}
                toolset='Solidity — Hardhat — Goerli — OpenZeppelin'
                btn1URL='https://goerli.etherscan.io/token/0x41902DD01Ec7cD14E67Ce3DF7ad8BE5267b8Cfe1'
                btn2URL= 'https://goerli.etherscan.io/address/0x41902DD01Ec7cD14E67Ce3DF7ad8BE5267b8Cfe1'
                btn1Text='View Details'
                btn2Text='View Contract'
            />

            <ProjectCard 
                title='Wildside Custom Taxidermy'
                bgImage={wildsideCustomTaxImg}
                toolset='React — CSS'
                btn1URL='https://evanfrische.vercel.app/#projects'
                btn2URL= 'https://evanfrische.vercel.app/#projects'
                btn1Text='Coming Soon'
                btn2Text='View Code'
            />
        </div>
    </div>
  )
}

export default Projects
