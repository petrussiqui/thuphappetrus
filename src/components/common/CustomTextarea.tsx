import { styled, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FormatHelper } from "utils/format";

const iconColor = `#adafca`;

const CustomInput = styled(Box)(({ theme }) => ({
  // height: 75,
  position: "relative",
  overflow: "auto",
  fontSize: "1rem",
  fontFamily: "Public Sans,sans-serif",
  " .text-output": {
    span: {
      color: "var(--primary)",
    },
  },
  " textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus":
    {
      WebkitTextFillColor: "currentColor",
      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
      transition: "background-color 5000s ease-in-out 0s",
    },
  " textarea::-webkit-input-placeholder": {
    color: iconColor,
  },
  " textarea:-moz-placeholder": {
    color: iconColor,
  },
  " textarea::-moz-placeholder": {
    color: iconColor,
  },
  " textarea:-ms-input-placeholder": {
    color: iconColor,
  },
  " textarea::placeholder": {
    color: iconColor,
  },
  " .converter-input": {
    color: "transparent",
    background: "none",
    width: "100%",
    opacity: 1,
    fontSize: "1rem",
    fontFamily: "inherit",
    position: "relative",
    border: "none",
    outline: "none",
    lineHeight: 1.2,
    caretColor: "var(--dark)",
    padding: 0,
    whiteSpace: "break-spaces",
    wordBreak: "break-all",
    letterSpacing: "unset",
    zIndex: 1,
  },
  " .converter-output": {
    position: "absolute",
    textAlign: "left",
    color: "var(--dark)",
    fontSize: "1rem",
    fontFamily: "inherit",
    fontWeight: 500,
    lineHeight: 1.2,
    whiteSpace: "break-spaces",
    wordBreak: "break-all",
    letterSpacing: "unset",
  },
}));

function CustomTextarea(
  { value, placeholder, onChange, minRows, onKeyUpCapture }: any,
  ref: any
) {
  return (
    <CustomInput>
      <div
        className="converter-output text-output"
        color="white"
        dangerouslySetInnerHTML={{
          __html: FormatHelper.HTMLConverter(value),
        }}
      ></div>
      <TextareaAutosize
        ref={ref}
        aria-label="minimum height"
        minRows={minRows}
        placeholder={placeholder}
        className="feed-content converter-input"
        value={value}
        onChange={onChange}
        onKeyUpCapture={onKeyUpCapture}
      />
    </CustomInput>
  );
}

export default React.forwardRef(CustomTextarea);
