import "./index.css"

const Footer = () => <footer className="footer-container">
<div>
    <div className="col1">
        <div className="col">
            <div className="anchor-ele">
                <a href="www.brandmark.io"><p className="cologo">Create your logo</p>
                    <div className="infi"></div></a>
            </div>
            <p className="cologo-para">Try Brandmark for free, no account needed</p>
        </div>
        <div className="col">
            <div className="anchor-ele">
                <a href="www.brandmark.io"><p className="support">Support</p>
                    <div className="infi"></div></a>
            </div>
            <p className="cologo-para">Have questions or need help? Start here.</p>
        </div>
        <div className="col">
            <div className="anchor-ele">
                <a href="www.brandmark.io"><p className="tools">Tools</p>
                    <div className="infi"></div></a>
            </div>
            <p className="cologo-para">Check out our free tools for color, font and logo design</p>
        </div>
    </div>
    <div className="col2"> 
        <div className="anch-box">   
            <a href="www.brandmark.io" className="tos-and-pp">Terms of service</a>
        </div>
        <div className="anch-box"> 
            <a href="www.brandmark.io" className="tos-and-pp">Privacy policy</a>
        </div>
    </div>
    <div className="box-container">
        <div className="boxes1">
            <div className="box box1"></div>
            <div className="box box2"></div>
        </div>
        <div className="boxes2">
            <div className="box box3"></div>
            <div className="box box4"></div>
        </div> 
    </div>
</div>
</footer>

export default Footer