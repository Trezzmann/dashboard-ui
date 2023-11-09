import { Flex, Grid } from "@chakra-ui/react";
import { Header, SideMenu } from ".";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const MainLayout = ({ children, title }: LayoutProps) => {
  return (
    <Grid
      bg="#F3F3F3"
      h="fit-content"
      templateColumns="94px auto"
      pos="relative"
    >
      <SideMenu />
      <Flex direction="column">
        <Header title={title} />
        {children}
        {/* <Dashboard /> */}
        {/* <Admin /> */}
        <Footer />
      </Flex>
    </Grid>
  );
};
