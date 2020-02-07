import React from 'react';
import './Main.css';
import ProjectTitle from './ProjectTitle';
import ReactPlayer from 'react-player';
import Button from './Button';
import ProjectSemiTitle from './ProjectSemiTitle';
import TechBtn from './TechBtn';
import { Link } from 'react-router-dom';

class Page4 extends React.Component {
    render() {
        return (
            <div className="page row-div">
                <div className="project-div column-div">
                        <img src="howabout.png" />
                        <div className="width-50 row-div">
                            <Button text="Github" url="https://github.com/stylish-sys/HowAboutPotato-" />
                        </div>
                </div>
                <div className="project-div column-div">
                    <ProjectTitle text="How About Potato" />
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="개요" />
                        > 교내 학생 4명으로 구성된 팀으로. Spring 프레임워크 기반 웹 프로젝트를 진행했습니다. 주제는 숙박업 예매사이트로 숙박업소의 등록과 위치 검색 등이 탑재되어 있습니다.
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="맡은 역할" />
                        > Front-End 담당 <br></br>
                        > Github 관리
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="사용 기술" />
                        <div className="tech-divdiv">
                            <TechBtn text="Spring" />
                            <TechBtn text="JQuery" />
                            <TechBtn text="Java" />
                            <TechBtn text="HTML" />
                            <TechBtn text="CSS" />
                            <TechBtn text="Javascript" />
                            <TechBtn text="MySQL" />
                        </div>
                    </div>
                </div>
                <div className="orange-color content-font one-rem column-div margin-05">
                    <Link to="/5"><span className="orange-color">>></span></Link>
                    <Link to="/5"><span className="orange-color">Next</span></Link>
                </div>
            </div>
        )
    }
}

export default Page4;