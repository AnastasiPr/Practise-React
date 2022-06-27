import { Button, Img, Stack, Spacer } from "@chakra-ui/react";

export default function Case({ photo, link }) {
  return (
    <Stack direction="column" align="center" spacing="15px" pb="1em">
      <Img src={photo} />
      <Spacer />
      <Button
        as="a"
        href={link}
        target="_blank"
        fontSize={{ base: "xs", lg: "lg" }}
        variant="outline"
        color="#E9E4BB"
        borderColor="#E9E4BB"
        _hover={{ bg: "#797A99" }}
        fontWeight="300"
        borderRadius="3em"
        h={{ base: "38px", lg: "59px" }}
        w={{ base: "113px", lg: "173px" }}
      >
        Посмотреть
      </Button>
    </Stack>
  );
}
