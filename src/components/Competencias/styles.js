import styled from 'styled-components';

export const Container = styled.div`
  width: 860px;
  height: 140px;
  background: #fff;
  border-radius: 25px;
  margin-top: 50px;
  padding: 25px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header.competitions{
    display: flex;
    align-items: center;

    h3{
      color: #76797e;
    }

    div.svg{
      background: #0870fd;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      margin-right: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

    
    }
  }

  line{
    width: 100%;
    height: 2px;
    background: #f7f7f7;
  }

  main{
    display: flex;

    div.especification{
      display: flex;

      img{
        width: 20px;
        height: 20px;
        margin-left: 7px;
      
        &:nth-last-child(1){
          margin-right: 40px;
        }
      }

      h3{
        color: #76797e;
        font-size: 15px;
        margin-left: 10px;
        margin-right: 20px;
      }
    }
  }
`;
