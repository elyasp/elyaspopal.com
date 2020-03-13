import React from "react";
import * as Scroll from "react-scroll";
import { ContactWrap, Title, Page, Contacts } from "./styles";

export const ContactView = props => {
  return (
    <Scroll.Element>
      <div name="contact">
        <Page>
          <ContactWrap>
            <Title>Get in touch,</Title>
            <Contacts>
              <a
                href="https://www.linkedin.com/in/elyaspopal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./linkedin.svg")} alt="linkedin-logo" />
              </a>
              <a
                href="https://github.com/elyasp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./github.svg")} alt="github-logo" />
              </a>
            </Contacts>
          </ContactWrap>
        </Page>
      </div>
    </Scroll.Element>
  );
};
