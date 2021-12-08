import React from "react";
import styled from "styled-components";
import ProfilePic from "./images/myprofilepic.jpg";

const AboutMe001 = styled.section`
  padding-top: 60px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 1349px;
  background-color: white;

  @media screen and (max-width: 720px) {
  }
`;

const AboutMeHeader = styled.div`
  text-align: center;
  font-size: 24px;
`;

const AboutMe002 = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;

  @media screen and (max-width: 712px) {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`;

const PicContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
  }
`;

const MyPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutMeText = styled.div`
  width: 50%;
  text-align: left;
  margin: 0 32px;

  @media screen and (max-width: 720px) {
    width: 90%;
    margin: 8px auto;
  }
`;

export default function AboutMe() {
  /*  let content = {
    English: {
      title: "About Me",
      description: `<p>
    I am originally from Los Angeles California in the United States. I
    have been living in Japan since 2016. While I mostly have a background
    as an English teacher, I am currently aspiring to build a career in
    either web design and/or web development. I have had experiences
    designing worksheets and powerpoint presentations. I also love to draw
    and spend my spare time either studying a programming language or
    honing in on my drawing skills. I believe that I can use these skills
    to design websites, apps, and other things that can potentially make
    peoples' live easier.
    <br />
    <br />
    Apart from that, I am also fascinated with Japanese culture,
    photography, cooking, and other foreign languages. I speak both
    English and Japanese, and have passed level N2 of the Japanese
    Language Proficiency Test.
  </p>`
    },
    Japanese: {
      title: "アルテアガジョセフについて",
      description: `<p>
    初めまして。私はアルテアガジョセフです。アメリカ合衆国のカリフォルニア州のロサンゼルス出身です。2016年以来、日本に住んでいます。今まで英語教師の経験が沢山ありますが、現在はWEBデザインやWEB開発の職業を希望しています。ワークシートやパワーポイントプレゼンテーションなどをよくデザインする経験があります。それに描くことが大好きで、暇な時にプログラミング言語や描き方などの練習します。ウェブサイトやアプリなどを造るためにこの能力を使用すると思います。
    <br />
    <br />
    以外には日本の文化や撮影や料理や外国語の興味を持っています。英語も日本語も話せます。日本語能力試験のN2を合格しました。
  </p>`
    }
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
*/
  return (
    <AboutMe001 id="AboutMe">
      <AboutMeHeader>
        <h2>About Me</h2>
      </AboutMeHeader>
      <AboutMe002>
        <PicContainer>
          <MyPicture src={ProfilePic} />
        </PicContainer>
        <AboutMeText>
          <p>
            I am originally from Los Angeles California in the United States. I
            have been living in Japan since 2016. While I mostly have a
            background as an English teacher, I am currently aspiring to build a
            career in either web design and/or web development. I have had
            experiences designing worksheets and powerpoint presentations. I
            also love to draw and spend my spare time either studying a
            programming language or honing in on my drawing skills. I believe
            that I can use these skills to design websites, apps, and other
            things that can potentially make peoples' live easier.
            <br />
            <br />
            Apart from that, I am also fascinated with Japanese culture,
            photography, cooking, and other foreign languages. I speak both
            English and Japanese, and have passed level N2 of the Japanese
            Language Proficiency Test.
          </p>
        </AboutMeText>
      </AboutMe002>
    </AboutMe001>
  );
}
