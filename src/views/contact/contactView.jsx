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
          <ContactWrap></ContactWrap>
        </Page>
      </div>
    </Scroll.Element>
  );
};
