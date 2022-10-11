import React from "react";
import Lula from "../../../Assets/lula-vampira.jpg"
import Whats from "../../../Assets/whatsapp.png"
import Email from "../../../Assets/email.png"
import Localiza from "../../../Assets/localiza.png"
import Linkedin from "../../../Assets/linkedin.png"
import GitHub from "../../../Assets/github.png"
import instagram from "../../../Assets/instagram.png"
import ReactIcon from "../../../Assets/react.png"
import javaScript from "../../../Assets/javaScript.png"
import styledComponent from "../../../Assets/styledComponent.png"
import { Typing } from "../typing/Typing";
import * as S from "./StylePerfil.js"

export default function Home() {

  return (
    <S.BoxPerfil>
      <S.Figure>
        <S.Img src={Lula} alt="Sou eu" />
        <Typing />
      </S.Figure>
      <S.Info>
        <h2>Desenvolvedor Front-End</h2>
        <S.SocialFigure>
          <a href="https://www.linkedin.com/in/luan-vitor-93a50a230/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Icone Linkedin" />
          </a>
          <a href="https://github.com/SaLuanVitor" target="_blank" rel="noreferrer">
            <img src={GitHub} alt="Icone GitHub" />
          </a>
          <a href="https://www.instagram.com/laun_vitor/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Icone instagram" />
          </a>
        </S.SocialFigure>
        <S.BoxContato>
          <S.Contato>
            <a href="https://wa.me/5575991995431?text=Bom+dia%21" target="_blank" rel="noopener noreferrer">
              <img src={Whats} alt="Icone whatsapp" />
              <p>(75)99199-5431</p>
            </a>
          </S.Contato>
          <S.Contato>
            <a href="mailto:luanvitorg_852@hotmail.com" target="_blank" rel="noopener noreferrer">
              <img src={Email} alt="Icone do Email" />
              <p>luanvitorg_852@hotmail.com</p>
            </a>
          </S.Contato>
          <S.Contato>
            <img src={Localiza} alt="Icone de Localização" />
            <p>Bahia</p>
          </S.Contato>
        </S.BoxContato>
        <S.BoxProject>
          <p>Desenvolvido em:</p>
          <figure>
            <img src={ReactIcon} alt="React Icon" title="React Icon" />
            <img src={javaScript} alt="javaScript Icon" title="javaScript Icon" />
            <img src={styledComponent} alt="styledComponent Icon" title="styledComponent Icon" />
          </figure>
        </S.BoxProject>
      </S.Info>
    </S.BoxPerfil >
  )
}