import React from "react";
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div style={{ textAlign: "center", padding: "404px" }}>
      <h1>Error!</h1>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Return <Link to="/">home</Link>.</h3>
    </div>
  );
}

export default Error404;