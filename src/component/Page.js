import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Stepwatch`}</title>
      {meta}
    </Helmet>
    <Stack className={title.toLowerCase()}>
      <Box ref={ref} {...other} >
        {children}
      </Box>
    </Stack>
  </>
));

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
