import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <ul className="Example">
        {props.example.map(function (example, index) {
          return (
            <li key={index}>
              <strong>Example: </strong>
              {example}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
