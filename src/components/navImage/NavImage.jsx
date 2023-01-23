import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.svg';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';
import './navimage.css';

function NavImage() {


    const [pos, setPos] = useState(1);

    const getThumnail = () => {
        let thumn = [
            document.getElementById('1'),
            document.getElementById('2'),
            document.getElementById('3'),
            document.getElementById('4'),
        ];
        return thumn;
    };

    useEffect(()=>{
        const thumnail = getThumnail();
        pos == 1 ? thumnail[0].className = 'thumnailSelect' : thumnail[0].className = 'thumnail';
    },[]);

    
    const handelclickNext = () => {
        const thumnail = getThumnail();
        if(pos==4){
            thumnail[0].className = 'thumnailSelect';
            thumnail[pos-1].className = 'thumnail';
            setPos(1);
        }else{
            setPos(pos + 1);
            thumnail[pos].className = 'thumnailSelect';
            thumnail[pos - 1].className = 'thumnail'
        }
    };

    const handelclickPrev = () => {
        let fig = document.getElementById(pos);
        //console.log(fig.id);
        if(fig.id == 1){
           fig.className = 'thumnail';
           fig = document.getElementById('4');
           fig.className = 'thumnailSelect';
           setPos(4);
        }else{
            fig.className = 'thumnail';
            fig = document.getElementById(pos - 1);
            fig.className = 'thumnailSelect';
            setPos(pos - 1);
        }
    };

    return (
        <div className="container">
            <div className="radio-button">
                <img name="prev" onClick={handelclickPrev} src={prev} alt="previous image" />
            </div>
            <div className="gallery">
                <img id="1" className="thumnail" src={logo} alt="logo image" />
                <img id="2" className="thumnail" src={logo} alt="logo image" />
                <img id="3" className="thumnail" src={logo} alt="logo image" />
                <img id="4" className="thumnail" src={logo} alt="logo image" />
            </div>
            <div className="radio-button">
                <img name="next" onClick={handelclickNext} src={next} alt="next image" />
            </div>
        </div>
    );
}

export default NavImage;