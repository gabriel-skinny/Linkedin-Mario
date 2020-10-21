import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 520px;
  padding: 10px;
  margin-right: 40px;
  border-radius: 25px;
  background: #fff; 

  display: flex;
  flex-direction: column;
  

  line{
    width: 100%;
    height: 2px;
    background: #f7f7f7;
  }

  header{
    display: flex;
    align-items: center;
    margin: 10px;

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
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 5px;
  margin-top: 10px;
  margin-left: 10px;

  

  div.perfil{
   display: flex;
   align-items: center;

   div.image{
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: url("https://raw.githubusercontent.com/DaniloLima122/interfaces-clone/master/Mario%20Linkedin/img/toad.jpg");
    background-size: 180%;
    background-position-x: -20px;
    background-position-y: -2px;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
  
   div.detail{
     
     h4{
       font-size: 14px;
       color: #0870fd;
     }
     p{
      color: #76797e;
      font-size: 13px;
     }
   }
  }
`
