import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Header from "../Header/Header";
import Spinner from "../../shared/components/Spinner/Spinner";
import Toaster from "../../shared/components/Toaster/Toaster";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout: React.FC<any> = (props) => {
  const screenMobile: any = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  const {
    toasterVisible,
    toasterMessage,
    toasterStatus,
    isLoading,
  } = useSelector((s: RootState) => s.layout);
  const [offset, setOffset] = useState<boolean>(false)

  useEffect(() => {
    setOffset(screenMobile)
  }, [screenMobile])


  return (
    <Box
      
    >
      <Header />
      {offset && <Offset />}

      <Box id="main">{props.children}</Box>
      <Toaster
        show={toasterVisible}
        message={toasterMessage}
        status={toasterStatus}
      />
      <Spinner show={isLoading} />
    </Box>
  );
};

export default Layout;
