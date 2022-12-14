import styled from "styled-components";

export const BoxPerfil = styled.section`
  font-family: cursive;
  width: 100%;
  height: 100%;
  border-radius: 2em;
  border: solid black;
`
export const Figure = styled.figure`
  width: 100%;
  height: 20em;
  border-bottom: solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 45%;
  height: 70%;
  border: solid black;
  border-radius: 30%;
  object-fit: cover;
`

export const Info = styled.section`
  display: flex;
  background-color: #E8C39C;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  align-items: center;
  padding: 1em;
  flex-direction: column;
  color: #333333;
  h2{
    border: solid black;
    border-radius: 3em;
    padding: 1em;
    box-shadow: #333333 1px 1px 5px 1px;
    font-size: 0.8rem;
    text-align: center;
  }
`

export const SocialFigure = styled.figure`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 auto;
  margin-top: 2em;
  img{
    width: 30PX;
    height: 2em;
    cursor: pointer;
    :hover{
      transform: scale(1.1);
    }
  }
`
export const BoxContato = styled.div`
  width: 100%;
  margin-top: 2em;
  border: solid black;
  border-radius: 2em;
  padding: 1em;
  background-color: #B6936F;
`

export const Contato = styled.div`
    border-bottom: solid black 1px;
    margin-bottom: 1em;
    display: flex;
  a{
    display: flex;
    text-decoration: none;
    color: #333333;
    margin-bottom: 0.5em;
    flex-wrap: wrap;
    @media only screen and (max-width:350px){
      font-size: 0.9rem;
    }
  }
  img{
    width: 30px;
    margin-right: 1em;
  }
  :last-child{
    border: none;
  }
  :hover{
    a{
      text-decoration: underline 2px;
    }
    img{
      transform: scale(1.1);
      }
    }

`
export const BoxProject = styled.div`
  width: 50%;
  border: solid black;
  border-radius: 2em;
  background-color: #B6936F;
  padding: 1em;
  height: 10%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  img{
    margin-top: 0.5em;
    margin-left: 0.5em;
    width: 20px;
    height: 20px;
  }
`

