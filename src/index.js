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
} from "@chakra-ui/react";
import theme from "./theme.js";

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
    <Container w="100%" mw="100%" bg="#44455C">
      <Flex h="130px" minWidth="max-content" alignItems="center" gap="2">
        <Flex w="1000px" direction="column" align="center">
          <Heading fontSize="6xl" fontStyle="body">
            Веб-дизайнер
          </Heading>
        </Flex>
        <Flex w="700px" direction="column" align="flex-end">
          <IconButton boxSize="108px" target="_blank" variant="unstyled">
            <Img src={telegram} alt="Telegram" />
          </IconButton>
        </Flex>
      </Flex>
      <Flex h="50px" w="700px" direction="column" align="flex-end">
        <Text fontSize="xs">Анастасия</Text>
      </Flex>
      <Flex h="150px" w="900px" direction="column" align="flex-end">
        <Text fontStyle="body">
          <br />
          Занимаюсь разработкой дизайнов
          <br />
          для сайтов. Креативные решения
          <br />
          для вашего бизнеса!"
          <br />
        </Text>
      </Flex>
      <Flex w="100%" direction="row" align="center" bg="#44455C">
        <Flex direction="column" align="center">
          <Img src={amster} alt="Telegram" />
          <IconButton target="_blank" variant="unstyled">
            <Img src={watch} alt="Посмотреть" />
          </IconButton>
        </Flex>
        <Flex direction="column" align="center">
          <Img src={core} alt="Telegram" />
          <IconButton target="_blank" variant="unstyled">
            <Img src={watch} alt="Посмотреть" />
          </IconButton>
        </Flex>
        <Flex direction="column" align="center">
          <Img src={garage} alt="Telegram" />
          <IconButton target="_blank" variant="unstyled">
            <Img src={watch} alt="Посмотреть" />
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
