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
        offend anyone.
      </Note>
      <h3>POST /v1/[YOUR API KEY]</h3>
      <h4 className="italic">
        Sends a string of text to Cussbuster and gets back an array of any bad
        words contained within the string passed in.
      </h4>
      <h4>Headers</h4>
      <table>
        <tbody>
          <tr>
            <th className="left-column">Name</th>
            <th>Description</th>
          </tr>
          <tr className="docs-row">
            <td className="left-column">Content-Type</td>
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
            <th className="left-column">Name</th>
            <th>Description</th>
          </tr>
          <tr className="docs-row">
            <td className="left-column">word</td>
            <td className="info-column">The offending word</td>
          </tr>
          <tr className="docs-row">
            <td className="left-column">wordTypeId</td>
            <td className="info-column">
              ID correlating to the reason why the word is offensive
            </td>
          </tr>
          <tr className="docs-row">
            <td className="left-column">wordType</td>
            <td className="info-column">
              Human readable text describing the reason why the word is
              offensive
            </td>
          </tr>
          <tr className="docs-row">
            <td className="left-column">severity</td>
            <td className="info-column">
              How bad the word is (in our opinion) on a scale of 1-10 where 10
              is the most severe
            </td>
          </tr>
          <tr className="docs-row">
            <td className="left-column">occurances</td>
            <td className="info-column">
              Number of times the offending word occurred in the string of text
              passed in
            </td>
          </tr>
        </tbody>
      </table>
      <p>WordType Mapping</p>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr className="docs-row">
            <td className="id-column">1</td>
            <td className="middle-column">Vulgarity</td>
            <td className="info-column">
              The word is commonly viewed as crass or vulgar.
            </td>
          </tr>
          <tr className="docs-row">
            <td className="id-column">2</td>
            <td className="middle-column">Racial Slur</td>
            <td className="info-column">
              The word is a racial slur.
            </td>
          </tr>
          <tr className="docs-row">
            <td className="id-column">3</td>
            <td className="middle-column">Sexism</td>
            <td className="info-column">
              The word is commonly viewed as sexist. Note that this category
              also includes words that are homophobic and transphobic.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Example return value if a user passes in the text "damn, she's a bitch
        but her friend is an even bigger bitch!" (schema with sample data):
      </p>
      <ReactJson
        enableClipboard={false}
        onEdit={false}
        onDelete={false}
        onAdd={false}
        src={obj}
      />
      <div className="pad-25"></div>
      <Note>
        If two curse words have the same root word but are different, they will
        be returned as seperate instances. For example, "bitch" and "bitching"
        will be returned as items in the array even though they have the same
        root word.
      </Note>
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
