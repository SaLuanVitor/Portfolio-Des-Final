import React from "react";
import { Nav } from "../components/nav/Nav.jsx";
import { HardSkill } from "../components/hardSkillsBox/HardSkills.js";
import * as S from "./StyleSobre.js"

export default function Sobre() {
  return (
    <>
      <S.Section>
        <S.Content>
          <Nav title="Sobre" pag="Home" link="/" pag02="Projetos" link02="/Projetos" />
          <S.BoxSobre>
            <p>
              Oi, me chamo Luan, amante de tecnologia, jogos e culinária! Atualmente tenho como objetivo iniciar minha carreira em tecnologia a partir do desenvolvimento web, que seria uma ótima oportunidade para entrar no mercado de trabalho e através desse novo desafio me desenvolver profissionalmente.
            </p>
            <S.SkillTitle>Algumas de minhas soft skill são:</S.SkillTitle>
            <S.BoxList>
              <ul>
                <li>Aprendizado Rápido</li>
                <li>Atencioso</li>
                <li>Colaboração</li>
                <li>Curioso</li>
                <li>Empatia</li>
              </ul>
              <ul>
                <li>Esforçado</li>
                <li>Ética</li>
                <li>Flexibilidade</li>
                <li>Organização</li>
              </ul>
            </S.BoxList>
          </S.BoxSobre>
        </S.Content>
        <S.Content>
          <S.BoxHeader>
            <h2>Tecnologias</h2>
          </S.BoxHeader>
          <S.BoxTec>
            <S.SkillTitle>Algumas de minhas hards skills são:</S.SkillTitle>
            <S.BoxHardSkill>
              {HardSkill.map((i) => (
                <S.Tec>
                  <img src={i.img} alt={i.alt} />
                  <p>{i.title}</p>
                </S.Tec>
              ))}
            </S.BoxHardSkill>
          </S.BoxTec>
        </S.Content>
      </S.Section >
    </>
  )
}