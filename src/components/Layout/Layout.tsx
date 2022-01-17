import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Header from "../Header/Header";
import Spinner from "../../shared/components/Spinner/Spinner";
import Toaster from "../../shared/components/Toaster/Toaster";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout: React.FC<any> = (props) => {
  const {
    toasterVisible,
    toasterMessage,
    toasterStatus,
    isLoading,
  } = useSelector((s: RootState) => s.layout);

 

  return (
    <>
      <Header />
      <Offset />
      <Box id="main">{props.children}</Box>
      <Toaster
        show={toasterVisible}
        message={toasterMessage}
        status={toasterStatus}
      />
      <Spinner show={isLoading} />
    </>
  );
};

export default Layout;
