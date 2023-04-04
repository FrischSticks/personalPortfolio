import React from 'react'
import Image from 'next/image'

import htmlImg from '../public/images/html.png';
import cssImg from '../public/images/css.png';
import tailwindImg from '../public/images/tailwind.png';
import materialUiImg from '../public/images/materialUI.png';
import antDesignImg from '../public/images/antDesign.png';
import javascriptImg from '../public/images/javascript.png';
import nodeJsImg from '../public/images/nodeJs.png';
import reactImg from '../public/images/react.png';
import nextImg from '../public/images/next.png';
import solidityImg from '../public/images/solidity.png';
import shopifyImg from '../public/images/shopify.png';
import googleAnalyticsImg from '../public/images/googleAnalytics.png';
import seoImg from '../public/images/seo.png';
import klaviyoImg from '../public/images/klaviyo.png';
import mySQLImg from '../public/images/mySQL.png';
import firebaseImg from '../public/images/firebase.png';
import photoshopImg from '../public/images/adobePhotoshop.png';
import illustratorImg from '../public/images/adobeIllustrator.png';
import premiereImg from '../public/images/adobePremierePro.png';
import blenderImg from '../public/images/blender.png';
import excelImg from '../public/images/microsoftExcel.png';
import accessImg from '../public/images/microsoftAccess.png';
import powerPointImg from '../public/images/microsoftPowerPoint.png';
import pythonImg from '../public/images/python.png';
import javaImg from '../public/images/java.png';
import gitHubImg from '../public/images/github.png';



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen m-20 max-w-fit mx-10 scroll-mt-36'>
        <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>MY SKILLS</h1>

        {/* MY SKILLS */}
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

          {/* HTML */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={htmlImg} alt="HTML Logo" width='100' height='100' /></div>
              <div>
                <h2>HTML</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          
          {/* CSS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={cssImg} alt="CSS Logo" width='100' height='100' /></div>
              <div>
                <h2>CSS</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={tailwindImg} alt="Tailwind Logo" width='100' height='100' /></div>
              <div>
                <h2>Tailwind</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={materialUiImg} alt="Material UI Logo" width='100' height='100' /></div>
              <div>
                <h2>Material UI</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
              </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={antDesignImg} alt="Ant Design Logo" width='100' height='100' /></div>
              <div>
                <h2>Ant Design</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* JS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={javascriptImg} alt="Javascript Logo" width='100' height='100' /></div>
              <div>
                <h2>Javascript</h2>
                <p className='text-sm'>Experience: 4 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={nodeJsImg} alt="NodeJs Logo" width='100' height='100' /></div>
              <div>
                <h2>NodeJS</h2>
                <p className='text-sm'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={reactImg} alt="React Logo" width='100' height='100' /></div>
              <div>
                <h2>React</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={nextImg} alt="Next Logo" width='100' height='100' /></div>
              <div>
                <h2>NextJS</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* BLOCKCHAIN */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={solidityImg} alt="Next Logo" width='65' height='65' /></div>
              <div>
                <h2>Solidity</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          {/* E-COMMERCE */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={shopifyImg} alt="Shopify Logo" width='100' height='100' /></div>
              <div>
                <h2>Shopify</h2>
                <p className='text-sm font-semibold'>Experience: 10+ years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={googleAnalyticsImg} alt="Google Analytics Logo" width='100' height='100' /></div>
              <div>
                <h2>Google Analytics</h2>
                <p className='text-sm font-semibold'>Experience: 6 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>
          
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={seoImg} alt="Search Engine Optimization" width='100' height='100' /></div>
              <div>
                <h2>SEO</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={klaviyoImg} alt="Klaviyo Logo" width='100' height='100' /></div>
              <div>
                <h2>Klaviyo</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* DBs */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={mySQLImg} alt="MySQL Logo" width='100' height='100' /></div>
              <div>
                <h2>MySQL</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={firebaseImg} alt="Firebase Logo" width='100' height='100' /></div>
              <div>
                <h2>Firebase</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>
      
          {/* GRAPHIC DESIGN */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={photoshopImg} alt="Adobe Photoshop Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Photoshop</h2>
                <p className='text-sm font-semibold'>Experience: 3 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={illustratorImg} alt="Adobe Illustrator Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Illustrator</h2>
                <p className='text-sm font-semibold'>Experience: 2 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={premiereImg} alt="Adobe Premiere Pro Logo" width='100' height='100' /></div>
              <div>
                <h2>Adobe Premiere</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={blenderImg} alt="Blender Logo" width='100' height='100' /></div>
              <div>
                <h2>Blender</h2>
                <p className='text-sm'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐</p>
                </div>
            </div>
          </div>

          {/* MICROSOFT APPLICATIONS */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={excelImg} alt="Microsoft Excel Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft Excel</h2>
                <p className='text-sm font-semibold'>Experience: 4 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={accessImg} alt="Microsoft Access Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft Access</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={powerPointImg} alt="Microsoft Powerpoint Logo" width='100' height='100' /></div>
              <div>
                <h2>Microsoft PowerPoint</h2>
                <p className='text-sm font-semibold'>Experience: 10+ years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>

          {/* OTHER */}
          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={pythonImg} alt="Python Logo" width='100' height='100' /></div>
              <div>
                <h2>Python</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className=' group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={javaImg} alt="Java Logo" width='100' height='100' /></div>
              <div>
                <h2>Java</h2>
                <p className='text-sm font-semibold'>Experience: 1 year</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐</p>
                </div>
            </div>
          </div>

          <div className='group p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div><Image src={gitHubImg} alt="GitHub Logo" width='100' height='100' /></div>
              <div>
                <h2>GitHub</h2>
                <p className='text-sm font-semibold'>Experience: 5 years</p>
                <p className='text-xs opacity-0 group-hover:opacity-100 ease-in duration-200'>⭐⭐⭐⭐</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills