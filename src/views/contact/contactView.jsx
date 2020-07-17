import React from "react";
import * as Scroll from "react-scroll";
import { Page, ContactWrap, Contacts, Contact, FormWrap } from "./styles";
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
            <Contacts>
              <a
                href="https://github.com/elyasp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact>
                  <img src={require("./images/github.png")} alt="github_logo" />
                  <p>
                    GITHUB
                    <br />
                    Follow for more projects like above
                  </p>
                </Contact>
              </a>
              <a
                href="https://www.linkedin.com/in/elyaspopal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact>
                  <img
                    src={require("./images/linkedin.png")}
                    alt="linkedin_logo"
                  />
                  <p>
                    LINKEDIN
                    <br />
                    Let's connect on LinkedIn
                  </p>
                </Contact>
              </a>
              <a
                href="http://instagram.com/elyasium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact>
                  <img
                    src={require("./images/instagram.svg")}
                    alt="instagram_logo"
                  />
                  <p>
                    INSTAGRAM
                    <br />
                    Share some creative ideas, suggestions or other cool content
                  </p>
                </Contact>
              </a>
              <a
                href="https://open.spotify.com/user/elyasmuziek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact>
                  <img
                    src={require("./images/spotify.svg")}
                    alt="spotify_logo"
                  />
                  <p>
                    SPOTIFY
                    <br />
                    Let's get schwifty!
                  </p>
                </Contact>
              </a>
              <a
                href="https://t.me/elyas_popal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact>
                  <img
                    src={require("./images/telegram.svg")}
                    alt="telegram_logo"
                  />
                  <p>
                    TELEGRAM
                    <br />
                    Anything is up for discussion
                  </p>
                </Contact>
              </a>
            </Contacts>
          </ContactWrap>
        </Page>
      </div>
    </Scroll.Element>
  );
};
