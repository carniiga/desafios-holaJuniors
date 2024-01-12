import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export const IphoneMarco = styled.img`
    position: absolute;
    right: 37%;
    width: 350px;

    
    
`;
export const LinkInBioWrapper = styled.div`
    height: 100%;
    width: 100%;
 
   
`;
export const LinkInBioContainer = styled.div`
    position: relative;
    z-index: 555;
    width: 22%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
    gap: 10px;

`;
export const LinkInBioTitle = styled.h2`
    margin: 70px auto 20px auto;
`;

export const LinkInBioImgContainer = styled.div`
    height: 160px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-image: url("/images/me.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
`;

export const LinkedinBtnContainer = styled.a`
    background-color: #B9E9F4;
    width: 90%;
    height: 50px;
    color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
`;

export const LinksInBio = styled.a`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    background-color: #FFDEC9;
    color: #FC7A00;
    font-weight: 600;
`;
export const LinkInBioPh = styled.p`
    font-size: 16px;
  
`;

export const SocialIconsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    gap:20px;
    justify-content: center;
    font-size: 20px;
    color: #FE5500;
`;

export const YtIcon = styled(FaYoutube)`
`;
export const IgIcon = styled(FaInstagram)``;

export const TwIcon = styled(FaTwitter)``;

export const LnIcon = styled(FaLinkedin)``