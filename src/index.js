import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  Img,
  Text,
  Heading,
  Spacer,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import theme from "./theme.js";

// Components
import Case from "./components/Case.js";

// Fonts
import "@fontsource/montserrat/300.css";

// Imgs
import amster from "./images/Амстердам.svg";
import core from "./images/Core.svg";
import garage from "./images/Garage.svg";
import telegram from "./images/Telegram.svg";

function Practise() {
  const photo = [
    { img: amster, link: "https://www.behance.net/anastesha" },
    {
      img: core,
      link: "https://www.behance.net/gallery/142492537/dizajn-koncepcija-estetiki-%28CORE%29",
    },
    { img: garage, link: "https://www.behance.net/anastesha" },
  ];
  return (
    <Stack minH="100vh" style={{ backgroundColor: "#44455C" }}>
      <Stack
        direction="row"
        align="start"
        marginX={{ base: "1em", lg: "3em" }}
        pt="1em"
      >
        <Heading
          color="#E9E4BB"
          size={{ base: "xl", lg: "4xl" }}
          fontWeight="300"
          fontStyle="body"
          pt="1em"
        >
          Веб-дизайнер
        </Heading>
        <Spacer />
        <IconButton
          as="a"
          href="https://t.me/anasteshha1"
          target="_blank"
          variant="unstyled"
        >
          <Img
            boxSize={{ base: "60px", lg: "120px" }}
            src={telegram}
            alt="Telegram"
          />
        </IconButton>
      </Stack>
      <Stack
        color="#E9E4BB"
        fontSize={{ base: "xs", lg: "xl" }}
        // align="center"
        marginX={{ base: "1em", lg: "3em" }}
        spacing="1.5em"
      >
        <Text pl={["7em", "15em", "17em", "20.5em", "20.5em", "20em"]}>
          Анастасия
        </Text>
        <Spacer />
        <Text
          pl={["7em", "15em", "17em", "20.5em", "20.5em", "20em"]}
          // maxW="42vw"
          w={["80vw", "80vw", "55vw", "75vw", "55vw", "42vw"]}
          // w={{ base: "80vw", md: "50vw", lg: "42vw" }}
          h="10vh"
        >
          Занимаюсь разработкой дизайнов для сайтов. Креативные решения для
          вашего бизнеса!
        </Text>
      </Stack>

      <Stack>
        <Stack
          pt="5em"
          marginX={{ base: "1em", lg: "3em" }}
          direction={{ base: "column", lg: "row" }}
          // spacing={{ base: "1em", lg: "20em" }}
          // align="center"
          justifyContent="space-around"
        >
          {photo.map((e) => (
            <Case photo={e.img} key={e} link={e.link} />
          ))}
          {/* <Spacer /> */}
        </Stack>
      </Stack>
    </Stack>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Practise />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
