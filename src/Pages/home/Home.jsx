import React from "react";
import Nav from "../components/nav/Nav";
import Perfil from "../components/perfil/Perfil.jsx"
import Obejtivos from "../Obejetivos/Obejetivos";
import * as S from "./StyleHome.js"

export default function Home() {

  return (
    <>
      <S.Section>
        <S.BoxPerfil>
          <Perfil />
        </S.BoxPerfil>
        <S.BoxNav>
          <Nav title="Navegação" />
        </S.BoxNav>
        <Obejtivos />
      </S.Section>
    </>
  )
}