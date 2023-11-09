import { Box } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { MdClose } from "react-icons/md";

interface Props {
  active: boolean;
}

const AdminStatus = (props: Props) => {
  return (
    <Box
      w={5}
      h={5}
      borderRadius="full"
      bg={props.active ? "green.500" : "red.500"}
      pos="absolute"
      right="-8px"
      bottom={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#fff"
    >
      {props.active ? <BsCheck /> : <MdClose />}
    </Box>
  );
};

export default AdminStatus;
