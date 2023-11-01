import {
    Avatar,
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Header, SideMenu } from "./layouts";
import { BiSearch } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

function App() {
    return (
        <Grid bg="#F3F3F3" templateColumns="94px auto">
            <SideMenu />
            <Flex direction="column">
                <Header />
                <Flex px={16} py={6} gap={4}>
                    <Box
                        maxH={"80vh"}
                        overflowY="hidden"
                        w="40%"
                        bg="#fff"
                        borderRadius={"md"}
                        border="1px solid #e5e5e5"
                    >
                        <HStack
                            borderBottom="1px solid #e5e5e5"
                            py={3}
                            px={6}
                            position="sticky"
                            top={0}
                            bg="#fff"
                        >
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    fontSize="2xl"
                                    color="gray.500"
                                >
                                    <BiSearch />
                                </InputLeftElement>
                                <Input placeholder="Search" bg="#F3F3F3" />
                            </InputGroup>
                            <Button
                                variant="ghost"
                                color="#500586"
                                fontSize="3xl"
                            >
                                <LuSettings2 />
                            </Button>
                            <Button
                                p={0}
                                variant="solid"
                                bg="#500586"
                                color="#fff"
                                fontSize="3xl"
                                borderRadius="full"
                            >
                                <IoMdAdd />
                            </Button>
                        </HStack>
                        <Box
                            pb={24}
                            h="100%"
                            overflowY="scroll"
                            transition="visibility 300ms"
                            __css={{
                                "&::-webkit-scrollbar": {
                                    w: "1",
                                },
                                "&::-webkit-scrollbar-track": {
                                    w: "1",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    visibility: "hidden",
                                    borderRadius: "full",
                                    bg: `#e7e7e7`,
                                },
                                "&:hover::-webkit-scrollbar-thumb": {
                                    visibility: "visible",
                                },
                            }}
                        >
                            <Box
                                pt={4}
                                px={6}
                                transition="all ease 300ms"
                                _hover={{
                                    background: "#EDE5F4",
                                }}
                            >
                                <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom="1px solid #e5e5e5"
                                    pb={4}
                                >
                                    <HStack
                                        spacing={4}
                                        alignContent="flex-start"
                                    >
                                        <Avatar size="md" />
                                        <VStack
                                            spacing={0}
                                            alignItems="flex-start"
                                        >
                                            <Text fontWeight="bold">
                                                Gregory Tran
                                            </Text>
                                            <Text fontSize="small">
                                                ADMIN-0020
                                            </Text>
                                        </VStack>
                                    </HStack>
                                    <HStack spacing={4} alignItems="flex-start">
                                        <Text color="#919191">4 days ago</Text>
                                        <Menu placement="left-start">
                                            <MenuButton>
                                                <Button
                                                    p={0}
                                                    borderRadius="full"
                                                    variant="ghost"
                                                    fontSize="3xl"
                                                >
                                                    <BiDotsVerticalRounded />
                                                </Button>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>
                                                    Edit profile
                                                </MenuItem>
                                                <MenuItem>De-activate</MenuItem>
                                                <MenuItem color="red.500">
                                                    Delete
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </HStack>
                                </Flex>
                            </Box>
                            <Box
                                pt={4}
                                px={6}
                                transition="all ease 300ms"
                                _hover={{
                                    background: "#EDE5F4",
                                }}
                            >
                                <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom="1px solid #e5e5e5"
                                    pb={4}
                                >
                                    <HStack
                                        spacing={4}
                                        alignContent="flex-start"
                                    >
                                        <Avatar size="md" />
                                        <VStack
                                            spacing={0}
                                            alignItems="flex-start"
                                        >
                                            <Text fontWeight="bold">
                                                Gregory Tran
                                            </Text>
                                            <Text fontSize="small">
                                                ADMIN-0020
                                            </Text>
                                        </VStack>
                                    </HStack>
                                    <HStack spacing={4} alignItems="flex-start">
                                        <Text color="#919191">4 days ago</Text>
                                        <Menu placement="left-start">
                                            <MenuButton>
                                                <Button
                                                    p={0}
                                                    borderRadius="full"
                                                    variant="ghost"
                                                    fontSize="3xl"
                                                >
                                                    <BiDotsVerticalRounded />
                                                </Button>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>
                                                    Edit profile
                                                </MenuItem>
                                                <MenuItem>De-activate</MenuItem>
                                                <MenuItem color="red.500">
                                                    Delete
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </HStack>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        h={"80vh"}
                        w="60%"
                        bg="#fff"
                        borderRadius={"md"}
                        border="1px solid #e5e5e5"
                    ></Box>
                </Flex>
            </Flex>
        </Grid>
    );
}

export default App;
