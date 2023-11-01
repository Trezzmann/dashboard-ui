import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { Header, SideMenu } from "./layouts";

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
                        <Box
                            borderBottom="1px solid #e5e5e5"
                            py={3}
                            px={4}
                            position="sticky"
                            top={0}
                            bg="#fff"
                        >
                            <Button>Press</Button>
                        </Box>
                        <Box
                            px={4}
                            pt={2}
                            pb={"24"}
                            h="100%"
                            overflowY="scroll"
                        >
                            Sure, I'd be happy to help you with your question.
                            To start, let's break down the question into smaller
                            parts. You want to know more about the best way to
                            structure a React project, specifically in terms of
                            the folder structure and file organization. First,
                            let's talk about the overall folder structure. A
                            common way to organize a React project is to have a
                            src folder that contains all the code for the
                            application, and a public folder that contains the
                            static assets of the application, such as images and
                            the main entry point for the application. Within the
                            src folder, you can create subfolders to organize
                            your code into different components or features of
                            the application. For example, you might have a
                            components folder that contains all the reusable
                            components of the application, a pages folder that
                            contains the different pages of the application, and
                            a utils folder that contains utility functions that
                            can be used throughout the application. In terms of
                            file organization, it's generally a good idea to
                            keep related files together in the same folder. For
                            example, if you have a Button component, you might
                            have a Button.js file that contains the code for the
                            component, a Button.test.js file that contains tests
                            for the component, and a Button.styles.css file that
                            contains the styles for the component. Another
                            important aspect of file organization is naming
                            conventions. It's a good idea to use descriptive
                            names for your files and folders, so that it's easy
                            to understand what they contain. For example,
                            instead of having a file named component1.js, you
                            might have a file named Button.js that clearly
                            indicates what the file contains. Finally, it's a
                            good idea to use a version control system, such as
                            Git, to manage your code and collaborate with
                            others. This will allow you to track changes to your
                            code over time, and easily revert back to previous
                            versions if necessary. I hope this helps! Let me
                            know if you have any other questions.
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
