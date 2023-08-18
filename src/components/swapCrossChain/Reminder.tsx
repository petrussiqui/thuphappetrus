import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Box, Stack, Typography, styled } from "@mui/material";

export const ExpectedBox = styled(Box)(({ theme }) => ({
  borderLeft: "5px solid var(--color-primary)",
  paddingLeft: "1.5rem",
  margin: "1rem 0 1rem",
}));

export default function Reminder({ fee }: any) {
  return (
    <ExpectedBox>
      <Stack direction={"row"} alignItems="center">
        <TipsAndUpdatesIcon fontSize="small" />
        <Typography variant="body2" ml={1}>
          Reminder Swap Cross-chain
        </Typography>
      </Stack>
      <Box>
        <ul>
          <li>
            <Typography variant="body2">
              Crosschain Fee is <b>{fee}%</b>.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Estimated Time of Crosschain Arrival is <b>3 ~ 5 mins</b>.
            </Typography>
          </li>
        </ul>
      </Box>
    </ExpectedBox>
  );
}
