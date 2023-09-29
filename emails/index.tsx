import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Font } from "@react-email/font";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import * as React from "react";
import CustomText from "./text";
import Code from "./code";
import { Img } from "@react-email/img";

interface IndexProps{

}

export default function Index(props: IndexProps): React.JSX.Element {
  return (
    <Html style={{
        background: "black",
        padding:"0px",
        margin:"0px"
    }}>

    <Container style={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: "black",
    }}>
      <Container
        style={{
            color: "#FFFFFF",
            background: "#090909",
            borderRadius: "7px",
            borderLeft: "1px solid #353535",
            borderTop: "1px solid #353535",
            borderRight: "1px solid #353535",
            paddingLeft: "50px",
            paddingRight: "50px",
            height:"90vh",
            marginTop:"50px",
            paddingBottom:"40vh"
        }}
      >
        <Container style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom:"30px",
            paddingTop:"50px",
            marginTop:"0px",
            color:"white"
        }}>
          <Img src="data:image/png;base64,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" />
        </Container>
        <Container
         style={{
            color:"white"
         }}
        >
          <Heading as="h1">
            Hey Tristan ! 👋
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
          </Heading>
          <CustomText>
            L’équipe d’Hack The Crous te souhaite la bienvenue!!!
          </CustomText>
          <CustomText>
            Néanmoins, il nous faut vérifier que tu sois bien un étudiant.
          </CustomText>
          <CustomText>Voici donc ton code d’activation :</CustomText>
          <Code code="34321" />
          <CustomText>
            Si tu ne t’es pas inscrit.e sur Hack The Crous, ignore ce mail.
          </CustomText>
        </Container>
      </Container>
</Container>
    </Html>
  );
}
