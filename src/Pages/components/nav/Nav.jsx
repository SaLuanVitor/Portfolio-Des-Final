import React from "react";
import * as S from "./StyleNav.js"

export default function Nav(props) {

  return (
    <S.BoxNav>
      <h2>{props.title}</h2>
      <S.Ul>
        <li>Sobre</li>
        <li>Projeto PA.ONU</li>
        <li>Projetos</li>
      </S.Ul>
    </S.BoxNav>
  )
}