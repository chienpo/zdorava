import React from "react";
import posed from "react-pose";

import aboutLogo1 from "../../../../../assets/images/selfies/1.jpg";
import aboutLogo2 from "../../../../../assets/images/selfies/2.jpg";
import aboutLogo3 from "../../../../../assets/images/selfies/3.jpg";
import aboutLogo4 from "../../../../../assets/images/selfies/4.jpg";
import aboutLogo5 from "../../../../../assets/images/selfies/centered.jpg";
import aboutLogo6 from "../../../../../assets/images/selfies/5.jpg";
import aboutLogo7 from "../../../../../assets/images/selfies/6.jpg";
import aboutLogo8 from "../../../../../assets/images/selfies/7.jpg";
import aboutLogo9 from "../../../../../assets/images/selfies/8.jpg";
import {GridFigure, GridLogo} from "./styled";

const PosedFigure = posed.figure({
  enter: {
    opacity: 1,
    left: 0,
    top: 0,
    scale: 1,
    transition: {duration: 1200, delay: 400},
    position: 'relative',
  },
  exit: {
    opacity: 0,
    scale: 5,
    left: ({ left }: any) => `${left}%`,
    top: ({ top }: any) => `${top}%`,
    transition: {duration: 1200, delay: 100},
    position: 'relative',
  }
});

export const AboutLogoView: React.FC<any> = () => (
  <GridLogo>
    <GridFigure><PosedFigure left={150} top={-250} src={aboutLogo1} alt="logo"><img src={aboutLogo1} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={-270} top={170} src={aboutLogo2} alt="logo"><img src={aboutLogo2} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={220} top={-220} src={aboutLogo3} alt="logo"><img src={aboutLogo3} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={720} top={720} src={aboutLogo4} alt="logo"><img src={aboutLogo4} alt="" /></PosedFigure></GridFigure>
    <GridFigure title="hello-photo"><PosedFigure left={-420} top={120} src={aboutLogo5} alt="logo"><img src={aboutLogo5} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={-220} top={220} src={aboutLogo6} alt="logo"><img src={aboutLogo6} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={220} top={-120} src={aboutLogo7} alt="logo"><img src={aboutLogo7} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={-620} top={620} src={aboutLogo8} alt="logo"><img src={aboutLogo8} alt="" /></PosedFigure></GridFigure>
    <GridFigure><PosedFigure left={-620} top={620} src={aboutLogo9} alt="logo"><img src={aboutLogo9} alt="" /></PosedFigure></GridFigure>
  </GridLogo>
);
