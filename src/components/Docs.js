import React from "react";
import ReactJson from "react-json-view";
import Note from "../widgets/Note";

const obj = [
  {
    word: "damn",
    wordTypeId: 1,
    wordType: "Vulgarity",
    severity: 1,
    occurances: 1
  },
  {
    word: "bitch",
    wordTypeId: 3,
    wordType: "Sexism",
    severity: 3,
    occurances: 2
  }
];

const Docs = () => {
  return (
    <div>
      <h2>Documentation</h2>
      <Note symbol="🤬" headerText="Warning">
        This documentation contains profanity as well as sexist language and
        racial slurs. Note that all offensive words in the documentation are
        done in the name of providing real examples and are not meant to hurt or
        offend anyone
      </Note>
      <h3>POST /v1/[YOUR API KEY]</h3>
      <h4 className="italic">
        Sends a string of text to CussBuster and gets back any naughty words
      </h4>
      <h4>Headers</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Content-Type</td>
            <td>Must be set to `application-json`</td>
          </tr>
        </tbody>
      </table>
      <h4>Responses</h4>
      <h5>200</h5>
      <p>
        Everything was successful with the request and data was returned. The
        object returned is an array containing information about all offending
        words in the text that was passed in.
      </p>
      <p>Return object documentation</p>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>word</td>
            <td>The offending word</td>
          </tr>
          <tr>
            <td>wordTypeId</td>
            <td>ID correlating to the reason why the word is offensive</td>
          </tr>
          <tr>
            <td>wordType</td>
            <td>
              Human readable text describing the reason why the word is
              offensive
            </td>
          </tr>
          <tr>
            <td>severity</td>
            <td>
              How bad the word is (in our opinion) on a scale of 1-10 where 10
              is the most severe
            </td>
          </tr>
          <tr>
            <td>occurances</td>
            <td>
              Number of times the offending word occurred in the string of text
              passed in
            </td>
          </tr>
        </tbody>
      </table>
      <p>WordType Mapping</p>
      <table>
        <tr className="small-row">
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr className="small-row">
          <td>1</td>
          <td>Vulgarity</td>
          <td>
            The word is commonly viewed as crass or vulgar. This includes (but
            is not limited to) words like fuck, shit, and damn
          </td>
        </tr>
        <tr className="small-row">
          <td>2</td>
          <td>Racial Slur</td>
          <td>
            The word is a racial slur. This includes (but is not limited to)
            words like kike, spic, and nigger
          </td>
        </tr>
        <tr className="small-row">
          <td>3</td>
          <td>Sexism</td>
          <td>
            The word is commonly viewed as sexist. This includes (but is not
            limited to) words like bitch and pussy
          </td>
        </tr>
      </table>
      <p>Example (schema with sample data):</p>
      <ReactJson
        enableClipboard={false}
        onEdit={false}
        onDelete={false}
        onAdd={false}
        src={obj}
      />
      <h5>401</h5>
      <p>
        The API key passed in could not be found in the database. If you have
        not created an account, please do so
      </p>
      <h5>402</h5>
      <p>
        You have reached your limit of API calls for the month. If you need more
        API calls, please contact support
      </p>
      <h5>400</h5>
      <p>
        Either the request is malformed or the string of text passed in was
        longer than 250 characters. If you feel that the request is formed
        properly and the character limit has not been exceeded, please contact
        support
      </p>
    </div>
  );
};

export default Docs;
