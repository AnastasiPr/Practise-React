import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  Container,
  Flex,
  Center,
  Img,
  Text,
  Heading,
  Spacer,
  Box,
  Link,
} from "@chakra-ui/react";
import theme from "./theme.js";
import "@fontsource/montserrat/300.css";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import telegram from "./images/Telegram.svg";
import amster from "./images/Амстердам.svg";
import core from "./images/Core.svg";
import garage from "./images/Garage.svg";
import watch from "./images/Посмотреть.svg";
import { Grid, GridItem } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

function Practise() {
  return (
    <Container
      maxW={["100%", "100%", "100%", "100%", "100%", "100%"]}
      maxH={["100%", "100%", "100%", "100%", "100%", "100%"]}
      bg="#44455C"
      margin="0"
      height={["100%", "100%", "100%", "100%", "100%", "100%"]}
    >
      <Flex height="15rem" minWidth="max-content" alignItems="center" gap="2">
        <Flex
          width="5xl"
          flexDirection={[
            "column",
            "column",
            "column",
            "column",
            "column",
            "column",
          ]}
          align="center"
        >
          <Heading color="#E9E4BB" fontSize="8xl" fontStyle="body">
            Веб-дизайнер
          </Heading>
        </Flex>
        <Flex height="2xs" width="3xl" direction="column" align="flex-end">
          <IconButton boxSize="3xs" target="_blank" variant="unstyled">
            <Img src={telegram} alt="Telegram" />
          </IconButton>
        </Flex>
      </Flex>
      <Flex h="5xs" width="51rem" direction="column" align="flex-end">
        <Text color="#E9E4BB" fontSize="2xl">
          Анастасия
        </Text>
      </Flex>
      <Flex height="5xs" width="68rem" direction="column" align="flex-end">
        <Text color="#E9E4BB" fontStyle="body" fontSize="2xl">
          <br />
          Занимаюсь разработкой дизайнов
          <br />
          для сайтов. Креативные решения
          <br />
          для вашего бизнеса!
          <br />
        </Text>
      </Flex>
      <Flex
        height="xl"
        width="100%"
        direction="row"
        align="center"
        gap="200"
        padding="3rem"
      >
        <Flex direction="column" align="center">
          <Img height="md" src={amster} alt="Telegram" />
          <Flex>
            <IconButton height="3rem" target="_blank" variant="unstyled">
              <Link href="https://www.behance.net/anastesha">
                <Img src={watch} alt="Посмотреть" />
              </Link>
            </IconButton>
          </Flex>
        </Flex>
        <Flex direction="column" align="center">
          <Img height="md" src={core} alt="Telegram" />
          <IconButton height="3rem" target="_blank" variant="unstyled">
            <Link href="https://www.behance.net/gallery/142492537/dizajn-koncepcija-estetiki-%28CORE%29">
              <Img src={watch} alt="Посмотреть" />
            </Link>
          </IconButton>
        </Flex>
        <Flex direction="column" align="center">
          <Img height="md" src={garage} alt="Telegram" />
          <IconButton height="3rem" target="_blank" variant="unstyled">
            <Link href="https://www.behance.net/anastesha">
              <Img src={watch} alt="Посмотреть" />
            </Link>
          </IconButton>
        </Flex>
      </Flex>
    </Container>
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
