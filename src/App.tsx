import React from "react";
import "normalize.css";

import FullScreenCanvas from "./canvas/FullScreenCanvas";
import ExampleCamera from "./canvas/ExampleCamera";
import ExampleBox from "./canvas/ExampleBox";

export default function App(): JSX.Element {
  return (
    <FullScreenCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ExampleCamera />
      <ExampleBox />
    </FullScreenCanvas>
  );
}
