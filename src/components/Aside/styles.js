import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "aside";
  height: 100%;
  width: 170px;
  background-color: #1d7cfd;
  color: #fff;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-left-radius: 20px;

`;


export const Tab = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;

  li{
    height: 100px;
    border-bottom: 1px solid rgba(159, 184, 223, 0.3);
    width: 100%;

    margin: 10px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    transition: all 0.2s;
      
    
    &:nth-child(1){
      margin-top: 30px;
      margin-bottom: 30px;
      border-bottom: 0;
    }

    &:nth-child(2){
      border-top: 1px solid rgba(159, 184, 223, 0.3);
      margin: 10px 0;
      padding-top: 10px;
      height: 110px;
    }

    &:nth-child(4){
      border: 0;
    }

    div.svg{
      border: 2px solid #fff;
      border-radius: 50%;
      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center; 
    }

    &.warnings{
      height: 160px;
      background: #fff;
      margin: 0;
      justify-content: center;

      div.mesagens {
        position: relative;
        
        border: 2px solid #1d7cfd;
        border-radius: 50%;
        padding: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1){
          margin-bottom: 20px;
        }

        &:before{
          content: "4";
          width: 15px;
          height: 15px;
          
          background: red;
          border-radius: 50%;
          
          font-size: 12px;
          font-weight: bold;

          position: absolute;
          top: -5px;
          left: 25px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  
    
    &.star{
      background: #eece1e;
      color: #282d36;
      height: 210px;
      border-bottom-left-radius: 20px;
      margin: 0;

      h1{
          font-size: 14px;
        }

      div.svgStar{
        background: #c27512;
        width: 100px;
        height: 100px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
          width: 70px;
        }
      }
    }
  }

  div.logo{
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    }
  `

