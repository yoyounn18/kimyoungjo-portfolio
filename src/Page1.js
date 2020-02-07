import React from 'react';
import './Main.css';
import ContentFont from './ContentFont';
import Button from './Button';
import { Link } from 'react-router-dom';

class Page1 extends React.Component {
    render() {
        return (
            <div className="page row-div">
                <div className="column-div width-90">
                    <ContentFont text="Front-End Developer 김영조의 포트폴리오 입니다." />
                    <div className="row-div width-100">
                        <Button text="Github" url="https://github.com/yoyounn18" />
                        <Button text="Blog" url="https://blex.kr/@yoyounn18" />
                    </div>
                </div>
                <div className="orange-color content-font one-rem column-div margin-05">
                    <Link to="/2"><span className="orange-color">>></span></Link>
                    <Link to="/2"><span className="orange-color">Next</span></Link>
                </div>
            </div>
        )
    }
}

export default Page1;