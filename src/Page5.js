import React from 'react';
import './Main.css';
import ProjectTitle from './ProjectTitle';
import ReactPlayer from 'react-player';
import Button from './Button';
import ProjectSemiTitle from './ProjectSemiTitle';
import TechBtn from './TechBtn';
import { Link } from 'react-router-dom';

class Page5 extends React.Component {
    render() {
        return (
            <div className="page row-div">
                <div className="project-div column-div">
                        <img src="owen.png" />
                        <div className="width-50 row-div">
                            <Button text="Github" url="https://github.com/yoyounn18/SPA-Toy-Project" />
                            <Button text="Website" url="https://yoyounn18.github.io/SPA-Toy-Project/" />
                        </div>
                </div>
                <div className="project-div column-div">
                    <ProjectTitle text="Owen Fan Page" />
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="개요" />
                        > 개인 프로젝트로, React의 핵심인 SPA를 활용하여 여러가지의 페이지로 구성된 fan page를 만드는 프로젝트를 진행했습니다.
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="맡은 역할" />
                        > 총괄 (개인 프로젝트)
                    </div>
                    <div className="project-content-content orange-color margin-3 width-45">
                        <ProjectSemiTitle text="사용 기술" />
                        <div className="tech-divdiv">
                            <TechBtn text="React" />
                            <TechBtn text="ES6" />
                            <TechBtn text="CSS" />
                        </div>
                    </div>
                </div>
                <div className="orange-color content-font one-rem column-div margin-05">
                    <Link to="/6"><span className="orange-color">>></span></Link>
                    <Link to="/6"><span className="orange-color">Next</span></Link>
                </div>
            </div>
        )
    }
}

export default Page5;