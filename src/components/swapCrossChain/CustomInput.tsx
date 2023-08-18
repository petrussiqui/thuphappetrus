import { TextField } from "@mui/material";

const CustomInput = (props: any) => (
  <TextField
    variant="standard"
    size="medium"
    fullWidth
    InputProps={{
      sx: {
        color: "var(--color-primary)",
        fontSize: 44,
        ".Mui-disabled": {
          WebkitTextFillColor: "var(--color-primary)!important",
          opacity: "0.5!important",
        },
        "&.MuiInput-root::after": {
          borderBottomColor: "var(--color-primary)!important",
        },
      },
    }}
    placeholder="0.0"
    type="number"
    onKeyDown={(e: any) => {
      if (["-", "+", "e", "E", ","].includes(e.key)) {
        e.preventDefault();
      }
      if (e.target.value.length === 0 && e.key === ".") {
        e.preventDefault();
      }
    }}
    min={0}
    onWheel={(e: any) => e.target.blur()}
    {...props}
  />
);
export default CustomInput;
