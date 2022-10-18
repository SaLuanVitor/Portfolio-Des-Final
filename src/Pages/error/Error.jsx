import React from "react";
import { Nav } from "../components/nav/Nav.jsx"
import * as S from "./StyleErro.js"

export default function Error() {

  return (
    <S.ErrorPag>
      <Nav title="Navegação" pag="Home" link="/" pag02="Sobre" link02="/Sobre" />
      <S.ErrorBox>
        <p>Error: Page not found :c </p>
      </S.ErrorBox>
    </S.ErrorPag>
  )
}