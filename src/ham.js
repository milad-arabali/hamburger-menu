import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
    list-style: none ;
    display : flex ;
    justify-content : right;
    margin: 20px 50px;
    z-index: 15;
    li {
        padding : 18px 30px;
    }
    @media (max-width : 768px){
        margin: 0;
        flex-direction: column;
        background: #1568df;
        transition: all .3s linear;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        transform:${props =>props.open ? "translateX(0)" : "translateX(100%)" };
        padding-top: 3.5rem;
        li{
            color: #fff;
        }
    }
`;
const ham = ({open}) => {
    return (
        <div>
            <Ul open={open}>    
                <li>Home</li>
                <li>Docs</li>
                <li>About</li>
                <li>Git</li>
            </Ul>
        </div>
    );
};

export default ham;

