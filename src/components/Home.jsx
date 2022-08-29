import React,{useState} from 'react'
import {AiOutlineSearch } from "react-icons/ai";
import {MdKeyboardVoice } from "react-icons/md";
import {CgMenuGridO  } from "react-icons/cg";
import dp from "../images/dp.jpg";
const Home = (props) => {
    const [searchValue ,setSearchValue] = useState('');
    const search =(e)=>{
        e.preventDefault();
        if(searchValue){
            props.history.push(`/search?q=${searchValue}`);
        }
    }
    const keyPress = (e)=>{
        if(e.key === 'Enter'){
            if(searchValue){
                props.history.push(`/search?q=${searchValue}`);
            }
        }
    }
    return (
        <div className="main">
            <div className="header_section">
                <div className="text">
                    <a href="https://accounts.google.com/">Gmail</a>
                    <a href="https://accounts.google.com/">Image</a>
                </div>
                <div className="icon_image">
                    <div className="icon"><CgMenuGridO /></div>
                    <div className="image">
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
            <div className="google_image">
                <img src="http://localhost:3000/image/ggg.png" alt="" />
            </div>
            <div className="search_seaction">
                <div className="icon_search">
                    <div className="search_icon"><span><AiOutlineSearch /></span></div>
                    <div className="form-group">
                        <input onKeyPress={keyPress} onChange={(e)=>setSearchValue(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="voice"><span><MdKeyboardVoice /></span></div>
                </div>
                <div className="search_btn">
                    <button onClick={search} className="btn">Google Search</button>
                    <button  className="btn"><a href="">I,m Feeling Lucky</a></button>
                </div>
            </div>
            <div className="lang">Google offered in: <a href=""> বাংলা</a></div>
            <div className="footer">
                <div className="footer_top">Bangladesh</div>
                <div className="footer_bottom">
                    <ul>
                        <li><a href="">About
                        </a></li>
                        <li><a href="">Advertising
                        </a></li>
                        <li><a href="">Business
                        </a></li>
                        <li><a href="">How Search works
                        </a></li>
                    </ul>
                    <ul>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home ;
