import React, { useState, useEffect } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Box from "@mui/material/Box";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMediaQuery } from "@mui/material";


const initDimension: { height: number, width: number} = {
  height: 400,
  width: 400
}

const ImageScrollBar: React.FC<any> = ({ data }) => {
  const isNotMobile: any = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
    const [dimension, setDimension] = useState(initDimension)


    useEffect(() => {
      if (isNotMobile) setDimension({height: 650, width: 650})
      else setDimension(initDimension)
    }, [isNotMobile])

  return (
    <Box>
      <ScrollMenu>
        {data.map((item: any) => (
          <Box
            sx={{ 
              overflow: "hidden", 
              padding: 1,
              height: dimension.height,
              width: dimension.width,
          }}
            itemID={item?.id}
            key={item?.id}
          >
            <LazyLoadImage
              alt=""
              effect="blur"
              src={item?.url}
              height={dimension.height}
              width={dimension.width}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default ImageScrollBar;
