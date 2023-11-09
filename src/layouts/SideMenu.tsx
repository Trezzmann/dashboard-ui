import { Flex } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { menuData } from "../data/sideMenu";
import { SideMenuItem } from "../components/sideMenu/SideMenuItem";

export const SideMenu = () => {
  return (
    <Flex
      borderRight="1px solid #e5e5e5"
      w="fit-content"
      h="100vh"
      direction="column"
      gap={16}
      position="sticky"
      top={0}
      bottom={0}
      bg="#fff"
      zIndex={"banner"}
    >
      <Flex
        pt={5}
        fontSize={"40px"}
        justifyContent="center"
        color="primary.400"
      >
        <BsFillCartCheckFill />
      </Flex>
      <Flex direction="column">
        {menuData.map((item) => (
          <SideMenuItem {...item} key={item.id} />
        ))}
      </Flex>
    </Flex>
  );
};
