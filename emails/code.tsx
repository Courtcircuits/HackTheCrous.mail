import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Row } from "@react-email/row";
import * as React from "react";

interface CodeProps {
  code: string;
}

export default function Code(props: CodeProps): React.JSX.Element {
  const letters: string[] = [];
  for (let i = 0; i < props.code.length; i++) {
    letters.push(props.code.charAt(i));
  }
  const result = letters.map((letter: string) => {
    return (
      <Column>
        <Container
          style={{
            borderRadius: "15px",
            fontSize: "25px",
            fontWeight: 600,
            background: "#313131",
            textAlign: "center",
            border: "1px solid #5F5F5F",
            filter: "drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.05))",
            width: "70%",
            color: "white",
          }}
        >
          <p>{letter}</p>
        </Container>
      </Column>
    );
  });

  return (
    <Container
      style={{
        borderRadius: "15px",
        fontSize: "30px",
        fontWeight: 600,
        background: "#313131",
        textAlign: "center",
        border: "1px solid #5F5F5F",
        filter: "drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.05))",
        width: "70%",
        color: "white",
      }}
    >
      <p style={{
        margin: "0px",
        paddingTop: "17px",
        letterSpacing:"5px",
        paddingBottom: "10px",
      }}>{props.code}</p>
    </Container>
  );
}
