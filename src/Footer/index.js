import React from "react";
import {
  Link,
  LinkText,
  ListStyle,
  CopyRight,
  Contact,
  Properties,
  Img,
} from "./styled.js";

const Footer = () => {
  const [visitedMail, setVisitedMail] = React.useState(false);
  const visitedMailAdress = () => {
    setVisitedMail(true);
  };
  const [visitedTel, setVisitedTel] = React.useState(false);
  const visitedTelephone = () => {
    setVisitedTel(true);
  };

  return (
    <Properties id="contact">
      <Contact>

        <ListStyle>
          e-mail:
          <Link
            onClick={visitedMailAdress}
            visitedM={visitedMail}
            href="mailto:jacob.69.isaac@gmail.com"
          >
            <LinkText>jacob.69.isaac@gmail.com</LinkText>
          </Link>
        </ListStyle>
        <ListStyle>
          tel:
          <Link
            onClick={visitedTelephone}
            visitedT={visitedTel}
            href="tel:+48.666(666)666"
          >
            <LinkText>+48 666-666-666</LinkText>
          </Link>
        </ListStyle>
      </Contact>
      <CopyRight>
        ©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone
      </CopyRight>
    </Properties>
  );
};

export default Footer;
