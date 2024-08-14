

import "./index.css"
import {
    FaRegUserCircle,
    FaRegFile,
    FaRegCreditCard,
    FaDesktop,
    FaExternalLinkAlt,
  } from 'react-icons/fa'
  import {BiBookmarks} from 'react-icons/bi'
  import {CgDesignmodo} from 'react-icons/cg'
  import {IoBookOutline} from 'react-icons/io5'
  import {FiCreditCard} from 'react-icons/fi'

const BeautifulBrand = () => <section className="beautiful-section-container">
    <div className="parent">
    <div className="grid-item div1">
       <img src="https://brandmark.io/images/i1.jpg" alt="img"/>
    </div>
    <div className="grid-item div2 planet-image">
    <img
        src="https://static-cf.foxdata.com/ap-backstage/prod/2023-12-28/1703728976176.jpg"
        alt="hello"
   
      />
    </div>
    <div className="grid-item div3">  <h1>Build a beautiful brand on time and on budget</h1></div>
    <div className="grid-item div4"> <p>Kickstart your business with thousands of <b>ready-to-use design</b> assets.</p></div>
    </div>
    
    <div className="single-details ">
    <div className="single-details-beaut-section">
              <FaRegFile />
              <p>Logo design files</p>
            </div>
            <div className="single-details-beaut-section">
              <FaRegCreditCard />
              <p>Business card designs</p>
            </div>
            <div className="single-details-beaut-section ">
              <BiBookmarks />
              <p>Letterhead templates</p>
            </div>
            <div className="single-details-beaut-section ">
              <FaDesktop />
              <p>Presentation templates</p>
            </div>

    <div className="single-details-beaut-section">
              <FaRegUserCircle />
              <p> Social profile icons</p>
            </div>
            <div className="single-details-beaut-section">
              <CgDesignmodo />
              <p>Animated designs</p>
            </div>
            <div className="single-details-beaut-section ">
              <FiCreditCard />
              <p>Social media designs</p>
            </div>
            <div className="single-details-beaut-section ">
              <IoBookOutline />
              <p>Brand guide</p>
            </div>
    </div>
    <button type="button" className="example-button">
        <FaExternalLinkAlt />
        See Example Assets
      </button>
</section>

export default BeautifulBrand