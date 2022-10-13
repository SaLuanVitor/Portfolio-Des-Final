import React from "react";
import * as S from "./StyleNav.js"

export function Nav(props) {

  return (
    <S.BoxNav>
      <h2>{props.title}</h2>
      <S.Ul>
        <S.LinkLi to={props.link}><li>{props.pag}</li></S.LinkLi>
        <S.LinkA href="http://des-sustentavel-bairro.vercel.app/" target="_blank"><li>PA.ONU</li></S.LinkA>
        <S.LinkLi to={props.link02}><li>{props.pag02}</li></S.LinkLi>
      </S.Ul>
    </S.BoxNav >
  )
}