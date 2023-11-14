import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import { Box } from "@mui/material";

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => (
    <>
      <Helmet>
        <title>{`SPRINT`} | {title}</title>
        {meta}
      </Helmet>

      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        ref={ref}
        {...other}
      >
        {children}
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
