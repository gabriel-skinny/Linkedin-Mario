import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 900px;
  width: 1440px;
  background-color: #eff3f7;
  border-radius: 25px;
  margin: auto;
  margin-top: 40px;
  z-index: -2;

  display: flex;
`;


export const Header = styled.header`
  grid-area: "header";
  position: relative;
  background-image: url("https://raw.githubusercontent.com/DaniloLima122/interfaces-clone/master/Mario%20Linkedin/img/banner.jpg");
  background-size: 110% 190%;
  background-repeat: no-repeat;
  border-top-right-radius: 25px;

  
  width: 100%;
  height: 400px;

  transition: all 0.2s;

  &:hover{
    background-size: 130% 220%;
    background-position: -80px -10px;
  }

  div.content{
    width: 100%;
    height: 400px;
    background:  linear-gradient(transparent 20%, #0870fd 80%);
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  }
`

export const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      height: 80px;
      padding: 25px 20px;
      border: 1px solid #fff;
      border-radius: 25px;

      input{
      background: transparent;
      color: #fff;
      border: 0;  
    }

    div.search{
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
`

export const Footer = styled.ul`
  display: flex;
  align-self: flex-end;
  
  color: #fff;

  li{
    display: flex;
    align-items: center;
    margin-right: 40px;

    div.image{
      height: 40px;
      width: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-right: 15px;

      display: flex;
      justify-content: center;
      align-items: center;
    
    }

    small{
      color: #87c3ee;
    }

    &.social-media{
      margin-left: 20px;
    }
  }
`

export const Main = styled.main`
  position: absolute;
  top: 430px;
  left: 550px;
  height: 300px;

  div.top{
    display: flex;
  }

`