import React from "react";
import { Box } from "../Box";
import { Image } from "../Image";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        // src="https://assets.pancakeswap.finance/web/pancake-3d-spinner-v2.gif"
        src="https://cysic.xyz/assets/logo-animated.svg"
        alt="pancake-3d-spinner"
      />
    </Box>
  );
};

export default Spinner;
