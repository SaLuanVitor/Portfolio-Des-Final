import React from "react";
import * as S from "./StyleNav.js"

export default function Nav(props) {

  return (
    <S.BoxNav>
      <h2>{props.title}</h2>
      <S.Ul>
        <S.LinkLi to={props.link}><li>{props.pag}</li></S.LinkLi>
        <S.LinkLi to="#"><li>PA.ONU</li></S.LinkLi>
        <S.LinkLi to="/Projetos"><li>Projetos</li></S.LinkLi>
      </S.Ul>
    </S.BoxNav>
  )
}