import { Flex, Grid } from "@chakra-ui/react";
import { Header, SideMenu } from "./layouts";
import { Footer } from "./layouts/Footer";
// import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";

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
        {/* <Dashboard /> */}
        <Admin />
        <Footer />
      </Flex>
    </Grid>
  );
}

export default App;
