import React from "react";
import Note from "../widgets/Note";
import { NavLink } from "react-router-dom";

const Tutorial = () => {
  return (
    <div>
      <h2>How to Use Cussbuster</h2>
      <Note symbol="🤬" headerText="Warning">
        This documentation contains profanity. Note that all offensive words in
        the documentation are done in the name of providing real examples and
        are not meant to hurt or offend anyone.
      </Note>
      <p>
        Cussbuster is an API that is called programatically. There is only one
        endpoint which takes in a text string in the body of the request and
        your API token in the URL itself. For this tutorial, we are going to be
        using Postman to make API calls. If you do not have Postman, you can
        download a copy{" "}
        <a
          href="https://www.getpostman.com/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . Select your operating system and download a copy of Postman. Also, if
        you do not have an API key yet, you'll need to sign up and get one. You
        can click{" "}
        <NavLink exact to="/">
          here
        </NavLink>{" "}
        to get one. Note that you can get an API key without putting in credit
        card information; a free account is limited to 250 calls per month and
        you can upgrade at any time. However, a free account is more than
        sufficient for tutorial purposes.
      </p>
      <img
        className="large"
        alt="postman_initial"
        src={require("../images/postman_initial.PNG")}
      />
      <p>
        A few things to note about the above image: first is that the HTTP verb
        is POST. Second, you'll need to add a header whose key is 'Content-Type'
        and whose value is 'application-json'. Third, you must append your
        unique API key to the end of the URL.
      </p>
      <img
        className="large"
        alt="postman_body"
        src={require("../images/postman_body.PNG")}
      />
      <p>
        Once you have gotten the URL and header information set up, select the
        'Body' tab to add some data to the call. You must have the 'raw' radio
        button selected. Then, in quotes, enter some text, such as "this is
        test". Once you have done that, hit the send button. Once the Send
        button has been clicked, you should get a response with a return code of
        200. The response itself should be an empty array. This is because there
        are no bad words within the text "this is a test".
      </p>
      <img
        className="large"
        alt="postman_no_bad_words"
        src={require("../images/postman_no_bad_words.PNG")}
      />
      <p>
        Now that we have made a call with no objectionable content, let's try a
        call with some curse words. Change "this is a test" to "this is a test,
        you fucker". Hit Send again and you will get an array with a single
        object this time.
      </p>
      <img
        className="large"
        alt="postman_bad_words"
        src={require("../images/postman_bad_words.PNG")}
      />
      <p>
        The object returned will give you information about each bad word found
        in the text passed in. So for example, if the text passed in contains
        three objectionable words, you will get back an array with three
        elements. Each element will let you know the objectionable word, the
        wordTypeId, the wordType (which is mapped to the wordTypeId), the
        severity and occurances. So, for example, if you were to pass in the
        text "fuck you, you fuck", you would only get one item in the array even
        though there are two bad words. The reason is that it is the same word
        two times. Thus, you will get an array with one item, but that item's
        'occurances' property will be '2'.
      </p>
    </div>
  );
};

export default Tutorial;
