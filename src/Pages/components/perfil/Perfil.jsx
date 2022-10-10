import React from "react";
import Lula from "../../../Assets/lula-vampira.jpg"
import * as S from "./StylePerfil.js"

export default function Home() {

  return (
    <S.BoxPerfil>
      <S.Figure>
        <S.Img src={Lula} alt="Sou eu" />
      </S.Figure>
      <div>

      </div>
    </S.BoxPerfil>
  )
}