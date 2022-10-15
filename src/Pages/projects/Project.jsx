import React from "react";
import * as S from "./StyleProject.js"
import { Project } from "../components/projectBox/ProjectBox.js";
import { Nav } from "../components/nav/Nav.jsx";
import up from "../../Assets/up.png"

export default function Projects() {
  return (
    <S.Section>
      <S.Content>
        <Nav title="Projetos" pag="Home" link="/" pag02="Sobre" link02="/Sobre" />
        <S.BoxProjeto>
          <a href="#home"><S.Up src={up} alt="seta para subir" /></a>
          <S.ContentProjeto>
            {Project.map((i) => (
              <S.Tec id="home">
                <a
                  href={i.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={i.img} alt={i.alt} />
                </a>
                <h3>{i.title}</h3>
                <a
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Repositório</button>
                </a>
                {i.pair && <p>Pairprogamming: <a href={i.pair} target="_blank" rel="noopener noreferrer">Leonardo Nunes</a></p>}

                <S.BoxProject>
                  <p>Desenvolvido em:</p>
                  <figure>
                    <img src={i.icons[0]} alt={i.altIcon} title={i.titleIcon} />
                    <img src={i.icons[1]} alt={i.altIcon2} title={i.titleIcon2} />
                    {i.icons[2] && <img src={i.icons[2]} alt={i.altIcon3} title={i.titleIcon3} />}
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