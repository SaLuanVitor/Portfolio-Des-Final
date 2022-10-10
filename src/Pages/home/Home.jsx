import React from "react";
import Nav from "../components/nav/Nav";
import Perfil from "../components/perfil/Perfil.jsx"
import * as S from "./StyleHome.js"

export default function Home() {

  return (
    <>
      <S.Section>
        <S.BoxPerfil>
          <Perfil />
        </S.BoxPerfil>
        <S.BoxNav>
          <Nav />
          <S.Typing>Olá!, eu me chamo Luan</S.Typing>
        </S.BoxNav>
      </S.Section>
    </>
  )
}