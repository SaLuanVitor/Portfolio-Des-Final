import React from "react";
import * as S from "./StyleNav.js"

export default function Nav(props) {

  return (
    <S.BoxNav>
      <h2>{props.title}</h2>
      <S.Ul>
        <S.LinkLi to={props.link}><li>{props.pag}</li></S.LinkLi>
        <S.LinkA href="https://des-sustentavel-bairro-bd5gymmlu-saluanvitor.vercel.app" target="_blank"><li>PA.ONU</li></S.LinkA>
        <S.LinkLi to="/Projetos"><li>Projetos</li></S.LinkLi>
      </S.Ul>
    </S.BoxNav >
  )
}