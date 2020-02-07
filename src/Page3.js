import React from 'react';
import './Main.css';
import ProjectTitle from './ProjectTitle';
import ReactPlayer from 'react-player';
import Button from './Button';
import ProjectSemiTitle from './ProjectSemiTitle';
import TechBtn from './TechBtn';
import { Link } from 'react-router-dom';

class Page3 extends React.Component {
    render() {
        return (
            <div className="page row-div">
                <div className="project-div column-div">
                        <ReactPlayer url="https://www.youtube.com/watch?v=ne8V5yhDHdE" />
                        <div className="width-50 row-div">
                            <Button text="Github" url="https://github.com/yoyounn18/Jarani" />
                    </div>
                </div>
                <div className="project-div column-div">
                    <ProjectTitle text="자전거 후방 지시등 및 거리 감지 모듈" />
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="개요" />
                        > 졸업과제 프로젝트로 진행한 Arduino와 AppInventor를 활용한 자전거 후방 지시등 및 거리 감지 모듈을 제작
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="맡은 역할" />
                        > 맞춤 app 개발 <br></br>
                        > Github 관리 <br></br>
                        > Arduino 모듈 일부 설계
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="사용 기술" />
                        <div className="tech-divdiv">
                            <TechBtn text="Arduino" />
                            <TechBtn text="Java" />
                            <TechBtn text="C" />
                        </div>
                    </div>
                </div>
                <div className="orange-color content-font one-rem column-div margin-05">
                    <Link to="/4"><span className="orange-color">>></span></Link>
                    <Link to="/4"><span className="orange-color">Next</span></Link>
                </div>
            </div>
        )
    }
}

export default Page3;