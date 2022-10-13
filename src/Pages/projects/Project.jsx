import React from "react";
import * as S from "./StyleProject.js"
import { Project } from "../components/projectBox/ProjectBox.js";
import { Nav } from "../components/nav/Nav.jsx";

export default function Projects() {
  return (
    <S.Section>
      <S.Content>
        <Nav title="Projetos" pag="Home" link="/" pag02="Sobre" link02="/Sobre" />
        <S.BoxProjeto>
          <S.ContentProjeto>
            {Project.map((i) => (
              <S.Tec>
                <img src={i.img} alt={i.alt} />
                <p>{i.title}</p>
                <S.BoxProject>
                  <p>Desenvolvido em:</p>
                  <figure>
                    <img src={i.icons[0]} alt="React Icon" title="React Icon" />
                    <img src={i.icons[1]} alt="javaScript Icon" title="javaScript Icon" />
                    <img src={i.icons[2]} alt="styledComponent Icon" title="styledComponent Icon" />
                  </figure>
                </S.BoxProject>
              </S.Tec>
            ))}
          </S.ContentProjeto>
        </S.BoxProjeto>
      </S.Content>
    </S.Section>
  )
}