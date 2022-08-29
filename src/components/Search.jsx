import React,{useState,useEffect,useRef} from 'react';
import {Link ,useLocation } from "react-router-dom";
import {CgMenuGridO  } from "react-icons/cg";
import {AiOutlineSetting,AiOutlineSearch } from "react-icons/ai";
import {MdKeyboardVoice } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Result from './Result';
import axios from 'axios'
import dp from "../images/dp.jpg";
const useQuery = ()=>{
    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    return sp.get('q');
}
const Search = (props) => {

    const apiKey = 'YOUR API KEY';
    const cxKey = 'YOUR CX KEY';


    const value = useQuery();
    const [state,setState] = useState(value);

    const [searchData,setSearchData] = useState({
        data : [],
        resultInfo : ''
    })

    const search = ()=>{
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${value}`).then(res=>{
            setSearchData({
                ...searchData,
                data : res.data.items || [],
                resultInfo : res.data.searchInformation
            })
        }).catch(error=>{
            console.log(error.response.data);
        })

    }

    useEffect(() => {
        search();
    }, [value])

    const keyPress =(e)=>{

        if(e.key === 'Enter'){
            if(state){
                props.history.push(`/search?q=${state}`);
            }
        }
    }

    const selectHeader = useRef();
    const selectResult = useRef();

    window.addEventListener('scroll',()=>{
        if(selectResult && selectResult.current){
            const height = selectResult.current.offsetTop;
            console.log(window.pageYOffset)
            if(window.pageYOffset>height){
                selectHeader.current?.classList.add('sticky')
            }else{
                selectHeader.current?.classList.remove('sticky')
            }
        }
    })
    return (
        <div className='search_main'>
            <div ref={selectHeader} className="search_header">
                <div className="img_search_field">
                    <div className="logo">
                        <Link to='/' className='image'><img src="http://localhost:3000/image/googleS.png" alt="" /></Link>
                    </div>
                    <div className="search_field">
                        <div className="form-group">
                            <input onKeyPress={keyPress} onChange={(e)=>setState(e.target.value)} value={state} type="text" className="form-control" />
                        </div>
                        <div className="action">
                            {
                                state && <span onClick={()=>setState('')} className='close'><IoClose/></span>
                            }
                            <span><MdKeyboardVoice/></span>
                            <span><AiOutlineSearch/></span>
                        </div>
                    </div>
                </div>
                <div className="img_icon">
                    <div className="icon"><span><AiOutlineSetting/></span></div>
                    <div className="icon"><span><CgMenuGridO/></span></div>
                    <div className="icon">
                        <div className="image">
                            <img src={dp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={selectResult} className="result_show">
                <div className="count"><span>About {searchData.resultInfo?.totalResults} results ({searchData.resultInfo?.searchTime}) </span></div>
                <Result data={searchData.data}/>
            </div>
        </div>
    )
}

export default Search
