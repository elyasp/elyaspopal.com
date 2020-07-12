import React from "react";
import * as Scroll from "react-scroll";
import { ContactWrap, Title, Page, Contacts } from "./styles";

export const ContactView = (props) => {
  return (
    <Scroll.Element>
      <div name="contact">
        <Page>
          <ContactWrap>
            <Title>
              <h5>Have a project, idea or a problem you'd like to discuss?</h5>
              <h2>Let's have a chat</h2>
              <br />
            </Title>
            <Contacts>
              <a
                href="https://www.linkedin.com/in/elyaspopal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./linkedin.svg")} alt="linkedin-logo" />
              </a>
              <a
                href="mailto:elyasp@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./plane.svg")} alt="paperplane-logo" />
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
