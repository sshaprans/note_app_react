import React from "react";
// import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2{
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a'>
            <h1>Grisha Ivanchuk</h1>
            <h2>All notes - {allPosts} || Liked it - {liked} </h2>
        </Header>
    )
}
export default AppHeader;