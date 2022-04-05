function selectLanguage(language) {
  let welcome1 = document.getElementById("welcome1");
  if (language === "Japanese") {
    welcome1.innerHTML = "初めまして。アルテアガジョセフです。";
  } else {
    welcome1.innerHTML = "Hello, my name is Joseph Arteaga";
  }

  let welcome2 = document.getElementById("welcome2");
  if (language === "Japanese") {
    welcome2.innerHTML = "WEBデザイナーやWEB開発の職業を希望しています。";
  } else {
    welcome2.innerHTML =
      "I am currently aspiring to be a web developer and web designer in Japan.";
  }

  let AboutMeH2 = document.getElementById("AboutMeH2");
  if (language === "Japanese") {
    AboutMeH2.innerHTML = "アルテアガジョセフについて";
  } else {
    AboutMeH2.innerHTML = "About Me";
  }

  let paragraph1 = document.getElementById("paragraph1");
  if (language === "Japanese") {
    paragraph1.innerHTML =
      "初めまして。私はアルテアガジョセフです。アメリカ合衆国のカリフォルニア州のロサンゼルス出身です。2016年以来、日本に住んでいます。今まで英語教師の経験が沢山ありますが、現在はWEBデザインやWEB開発の職業を希望しています。ワークシートやパワーポイントプレゼンテーションなどをよくデザインする経験があります。それに描くことが大好きで、暇な時にプログラミング言語や描き方などの練習します。ウェブサイトやアプリなどを造るためにこの能力を使用すると思います。";
  } else {
    paragraph1.innerHTML =
      "I am originally from Los Angeles California in the United States. I have been living in Japan since 2016. While I mostly have a background as an English teacher, I am currently aspiring to build a career in either web design and/or web development. I have had experiences designing worksheets and powerpoint presentations. I also love to draw and spend my spare time either studying a programming language or honing in on my drawing skills. I believe that I can use these skills to design websites, apps, and other things that can potentially make peoples' live easier.";
  }

  let paragraph2 = document.getElementById("paragraph2");
  if (language === "Japanese") {
    paragraph2.innerHTML =
      "以外には日本の文化や撮影や料理や外国語の興味を持っています。英語も日本語も話せます。日本語能力試験のN2を合格しました。";
  } else {
    paragraph2.innerHTML =
      "Apart from that, I am also fascinated with Japanese culture, photography, cooking, and other foreign languages. I speak both English and Japanese, and have passed level N2 of the Japanese Language Proficiency Test.";
  }

  let skillsH2 = document.getElementById("skillsH2");
  if (language === "Japanese") {
    skillsH2.innerHTML = "能力・スキルなど";
  } else {
    skillsH2.innerHTML = "Skills";
  }

  let workH2 = document.getElementById("workH2");
  if (language === "Japanese") {
    workH2.innerHTML = "私のプロジェクト";
  } else {
    workH2.innerHTML = "My Work";
  }

  let contactH2 = document.getElementById("contactH2");
  if (language === "Japanese") {
    contactH2.innerHTML = "一緒に働きましょう！";
  } else {
    contactH2.innerHTML = "Let's work together!";
  }
}
