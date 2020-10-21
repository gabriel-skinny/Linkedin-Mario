import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: -180px;
  left: 40px;
  height: 600px;
  width: 300px;
  
  

  div.wrapper{
    height: 465px;
    background: #fff;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
    border-bottom: 5px solid #d7d7d7; 
    box-shadow: 0px 10px 2px -1px rgba(0, 0, 0, 0.1);
    
    div.image{
      position: absolute;
      top: -80px;
      border: 5px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 5px #adadad;
      width: 200px;
      height: 200px;
      background: url("https://raw.githubusercontent.com/DaniloLima122/interfaces-clone/master/Mario%20Linkedin/img/mario.jpg");
      background-size: cover;

    
      &::after{
        content: "";
        position: absolute;
        top: 165px;
        right: 30px;
        
        height: 20px;
        width: 20px;
        
        border-radius: 50%;
        border: 5px solid #fff;
        box-shadow: 0 1px 5px #adadad;
        background: #18e381;
      }
    }   
  }
`;

export const Main = styled.main`
  height: 65%;
  width: 100%;
  margin-top: 160px;
  z-index: 10;
  
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  h1{
      margin-bottom: 20px;
      color: #76797e;
    }
    
    p{
      color: #8b8b8b;
      font-size: 14px;
    }
   

    div.details{
      width: 80%;
      margin: auto;

      display: flex;
      justify-content: space-around;
      align-items: center;

      div.conections{
        h3{
          color: #0870fd;
        }
      }

     line{
          height: 70px;
          width: 1px;
          background: #ebebeb;
        }
    }

    div.buttons{
      width: 100%;
      margin-bottom: 30px;

      display: flex;
      justify-content: space-around;
    
      button{
        color: #fff;
        background: #0870fd;
        padding: 15px 40px;
        border-radius: 25px;
        border: 0;

        &.transparent{
          background: transparent;
          border: 1px solid #8b8b8b;
          color: #8b8b8b;
        }
      }
    }
`


export const Details = styled.div`
  position: relative;
  top: -20px;
  height: 500px;
  background: url("https://raw.githubusercontent.com/DaniloLima122/interfaces-clone/master/Mario%20Linkedin/img/banner.jpg");
  background-size: 340% ;
  color: #fff;
  border-radius: 0 0 25px 25px;
  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;

  div.detail-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    h1{
     margin-top: 40px;
     margin-bottom: 10px;
     font-size: 20px; 
    }
    
    div.box{
      background: #fff;
      color: #000;
      width: 250px;
      height: 70px;
      border-radius: 15px;
      box-shadow: 0px 10px 2px -1px rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid #d7d7d7;
      margin-top: 20px;

      display: flex;
      align-items: center;
      
      img{
        width: 40px;
        border-radius: 50%;
        margin-left: 10px;
      }

      div.title{
        margin-left: 10px;

        h4{
        font-size: 14px;
        }

        p{
          font-size: 12px;
        }
      }
    }
  
    button{
      position: relative;
      bottom: -25px;
      width: 100%;
      padding: 20px 30px;
      font-size: 20px;
      background: rgba(8, 127, 130, 0.9);
      border: 0;
      border-top: 1px solid #ccc;
      border-radius: 0 0 20px 20px;
      color: #fff;
    }
  }

  
`