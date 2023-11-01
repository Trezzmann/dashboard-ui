import {
    Avatar,
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Header, SideMenu } from "./layouts";
import { BiSearch } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { AdminItem } from "./components/AdminItem";
import { BiDotsVerticalRounded } from "react-icons/bi";

function App() {
    return (
        <Grid
            bg="#F3F3F3"
            h="fit-content"
            templateColumns="94px auto"
            pos="relative"
        >
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
                        position="relative"
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
                            overflowY="auto"
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
                            <AdminItem />
                            <AdminItem />
                            <AdminItem />
                        </Box>
                    </Box>
                    <Box
                        maxH={"fit-content"}
                        w="60%"
                        bg="#fff"
                        borderRadius={"md"}
                    >
                        <Flex
                            borderBottom="1px solid #e5e5e5"
                            justifyContent="space-between"
                            pr={6}
                        >
                            <HStack px={6} spacing={0} p={0}>
                                <Text px={8} py={5}>
                                    Summary
                                </Text>
                                <Text
                                    px={8}
                                    py={5}
                                    fontWeight="bold"
                                    borderBottom="3px solid #f7f48f"
                                >
                                    Profile
                                </Text>
                            </HStack>
                            <HStack fontWeight="bold" p={0}>
                                <Button
                                    m={0}
                                    p={0}
                                    variant="ghost"
                                    bg="#F1F1F1"
                                    color="#3c3c3c"
                                    fontSize="lg"
                                    borderRadius="full"
                                >
                                    <IoMdAdd />
                                </Button>
                                <Button
                                    m={0}
                                    p={0}
                                    variant="ghost"
                                    bg="#F1F1F1"
                                    color="#3c3c3c"
                                    fontSize="lg"
                                    borderRadius="full"
                                >
                                    <IoMdAdd />
                                </Button>
                                <Button
                                    m={0}
                                    p={0}
                                    variant="ghost"
                                    bg="#F1F1F1"
                                    color="#3c3c3c"
                                    fontSize="lg"
                                    borderRadius="full"
                                >
                                    <IoMdAdd />
                                </Button>
                            </HStack>
                        </Flex>
                        <Flex
                            justifyContent="space-between"
                            px={6}
                            py={6}
                            w="100%"
                        >
                            <Flex gap={8}>
                                <Avatar size="lg" />
                                <VStack spacing={6} align="flex-start">
                                    <VStack align="flex-start" spacing={0}>
                                        <Heading size="lg">
                                            Gregory Tran
                                        </Heading>
                                        <Text>ADMIN-0020</Text>
                                    </VStack>
                                    <VStack align="flex-start">
                                        <Text>tran@shora.cos</Text>
                                    </VStack>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="sm" color="#919191">
                                            Phone number
                                        </Text>
                                        <Text>+257 79 28 4124</Text>
                                    </VStack>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="sm" color="#919191">
                                            Home address
                                        </Text>
                                        <Text>+257 79 28 4124</Text>
                                    </VStack>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="sm" color="#919191">
                                            Permission
                                        </Text>
                                        <Text>Can view</Text>
                                    </VStack>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="sm" color="#919191">
                                            Status
                                        </Text>
                                        <Text>Activate</Text>
                                    </VStack>
                                    <VStack align="flex-start" spacing={0}>
                                        <Text fontSize="sm" color="#919191">
                                            Password
                                        </Text>
                                        <Text>************</Text>
                                    </VStack>
                                </VStack>
                            </Flex>
                            <VStack align="flex-end" spacing={12}>
                                <HStack>
                                    <Button size="sm">Edit profile</Button>
                                    <Button size="sm">
                                        <BiDotsVerticalRounded />
                                    </Button>
                                </HStack>
                                <Text fontSize="sm">
                                    Joined:{" "}
                                    <Text as="span" color="#919191">
                                        4 days ago
                                    </Text>
                                </Text>
                            </VStack>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Grid>
    );
}

export default App;
