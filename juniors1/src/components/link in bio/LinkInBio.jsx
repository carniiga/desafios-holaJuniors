import React from "react";
import {
    IgIcon,
  IphoneMarco,
  LinkInBioContainer,
  LinkInBioImgContainer,
  LinkInBioPh,
  LinkInBioTitle,
  LinkInBioWrapper,
  LinkedinBtnContainer,
  LinksInBio,
  LnIcon,
  SocialIconsContainer,
  TwIcon,
  YtIcon,
} from "./linkInBioStyles";

const LinkInBio = () => {
  return (
    <LinkInBioWrapper>
         <IphoneMarco src="images/iphone.png"/>
      <LinkInBioContainer>
        <LinkInBioTitle>HolaJuniors</LinkInBioTitle>
        <LinkInBioImgContainer />
        <LinkInBioPh>
        Mi nombre es Agustin Fernandez soy full stack developer con experiencia en el desarrollo de aplicaciones web.
        </LinkInBioPh>
        <LinkedinBtnContainer
          href="https://www.linkedin.com/in/agustin-fernandez-48907b25b/"
          target="_blank"
        >
          Mi Linkedin
        </LinkedinBtnContainer>
        <LinksInBio href="mailto:fernandezagustin98@hotmail.com">Enviame un email</LinksInBio>
        <LinksInBio href="https://portfolio-hf2l2mbiw-carniiga.vercel.app/" target="_blank">Mi portfolio</LinksInBio>
        <LinksInBio href="https://holajuniors.com/" target="_blank">HolaJuniors.com</LinksInBio>
        <SocialIconsContainer>
        <YtIcon/>
        <IgIcon/>
        <TwIcon/>
        <LnIcon/>
        
        </SocialIconsContainer>
      </LinkInBioContainer>
    </LinkInBioWrapper>
  );
};

export default LinkInBio;
