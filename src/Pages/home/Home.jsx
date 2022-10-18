import React from "react";
import { Nav } from "../components/nav/Nav";
import { Perfil } from "../components/perfil/Perfil.jsx"
import { Obejtivo } from "../Obejetivos/Obejetivos.jsx";
import * as S from "./StyleHome.js"

export default function Home() {

  return (
    <>
      <S.Section>
        <S.BoxPerfil>
          <Perfil />
        </S.BoxPerfil>
        <S.BoxNav>
          <Nav title="Saiba Mais" pag="Sobre" link="/Sobre" pag02="Projetos" link02="/Projetos" />
          <Obejtivo />
        </S.BoxNav>
      </S.Section>
    </>
  )
}