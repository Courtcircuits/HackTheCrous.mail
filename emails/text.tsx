import * as React from "react";
import { Text } from "@react-email/text";
import { Font } from "@react-email/font";
import { Container } from "@react-email/container";

export default function CustomText({ children }) {
  return (
    <Container style={
        {
            fontSize: "20px",
            color: "white"
        }
    }>
    <p>
      {children}
      <Font
        fontFamily="Inter"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </p>
</Container>
  );
}
