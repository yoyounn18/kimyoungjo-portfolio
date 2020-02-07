import React from 'react';
import './Main.css';
import Button from './Button';

class Page4 extends React.Component {
    render() {
        return (
            <div className="page column-div">
                <a href="mailto:yoyounn88@gmail.com"><span className="orange-color two-rem content-font bold">yoyounn88@gmail.com</span></a>
                <span className="orange-color one-rem content-font margin-05">누구보다 열정적으로 일할 준비가 되어있고, 그렇게 하고싶습니다.</span>
                <span className="orange-color one-rem content-font">정말 최선을 다하겠습니다. 연락 부탁드립니다.</span>
                <Button text="Résumé" />
            </div>
        )
    }
}

export default Page4;