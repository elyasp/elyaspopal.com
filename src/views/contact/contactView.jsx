import React from "react";
import * as Scroll from "react-scroll";
import { ContactWrap, Page, Contacts, FormWrap } from "./styles";
import { ContactForm } from "../../components";

export const ContactView = (props) => {
  return (
    <Scroll.Element>
      <div name="contact">
        <Page>
          <FormWrap>
            <ContactForm />
          </FormWrap>
          <ContactWrap>
            {/* <Contacts>
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
            </Contacts> */}
          </ContactWrap>
        </Page>
      </div>
    </Scroll.Element>
  );
};
