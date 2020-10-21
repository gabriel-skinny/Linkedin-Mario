import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 300px;
  padding: 20px;
  margin-right: 40px;
  border-radius: 25px;
  background: #eece1e; 

  display: flex;
  flex-direction: column;
  justify-content: space-between; 

  line{
    width: 100%;
    height: 2px;
    background: #dcc024;
  }

  header{
    display: flex;
    align-items: center;

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

  main{
    position: relative;

    p{
      color:#8e7c23;
      font-size: 14px;
    }

    img{
      height: 150px;
      width: 100px;
      
      position: absolute;
      right: -90px;
      bottom: -40px;
    }
  }
`;
