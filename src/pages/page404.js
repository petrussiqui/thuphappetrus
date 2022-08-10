

import { Grid, Box, styled, Container } from '@mui/material';
import * as CusConst from '../settings/constants'
// ----------------------------------------------------------------------
const CusGrid = styled(Grid)(() => ({
  marginTop: '50px',
  marginBottom: '50px',
  textAlign: 'center',
  "& h2": {
    color: CusConst.TEXT_COLOR,
    fontSize: '28px',
  },

}));

export default function Page404() {
  return (
    <Container>
      <CusGrid container columnSpacing={2} sx={{ alignItems: 'center'}}>
        <Grid xs={12} md={6}>
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_4qhciwpm.json"
            background="transparent" speed="1" loop autoplay></lottie-player>
        </Grid>
        <Grid xs={12} md={6}>
          <Box>
            <Box component="h2"> Sorry, you are lost </Box>
            <CusConst.CUS_BUTTON_BLUE variant='contained'> Back to home!</CusConst.CUS_BUTTON_BLUE>
          </Box>
        </Grid>
      </CusGrid>
    </Container>
  );
}
