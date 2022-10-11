import React from "react";
import Nav from "../components/nav/Nav.jsx";
import * as S from "./StyleSobre.js"

export default function Sobre() {
  return (
    <>
      <S.Section>
        <S.BoxNav>
          <Nav title="Sobre" pag="Home" link="/" />
          <S.BoxSobre>
            <p>
              Oi, me chamo Luan, amante de tecnologia, jogos e culinária! Atualmente tenho como objetivo iniciar minha carreira em tecnologia a partir do desenvolvimento web, que seria uma ótima oportunidade para entrar no mercado de trabalho e através desse novo desafio me desenvolver profissionalmente.
            </p>
            <S.SkillTitle>Algumas de minhas soft skill são:</S.SkillTitle>
            <S.BoxList>
              <ul>
                <li>Aprendizado Rápido</li>
                <li>Atensioso</li>
                <li>Curioso</li>
                <li>Colaboração</li>
                <li>Empatia</li>
              </ul>
              <ul>
                <li>Esforçado</li>
                <li>Flexibilidade</li>
                <li>Ética</li>
                <li>Organização</li>
              </ul>
            </S.BoxList>
          </S.BoxSobre>
        </S.BoxNav>
      </S.Section >
    </>
  )
}