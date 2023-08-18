import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import useResponsive from "hooks/useResponsive";
import React from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(550px, 90%)",
  bgcolor: "background.paper",
  boxShadow: "3px 4px 20px 0px rgba(0, 0, 0, 0.20)",
  borderRadius: "20px",
};
const headStyle = {
  // background: 'url("/images/common/modal-head.jpg")',
  // backgroundSize: "100% 100%",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  padding: "16px 32px",
  borderRadius: "20px 20px 0 0",
  borderBottom: "1px solid #DDD",
};

type Props = {
  children?: React.ReactNode;
  open: boolean;
  sx?: any;
  title?: string;
  hasClickOver?: boolean;
  hasCloseButton?: boolean;
  disableCloseButton?: boolean;
  handleClose: () => void;
};

export default function CustomModal({
  children,
  open,
  sx,
  title,
  hasClickOver,
  hasCloseButton,
  disableCloseButton,
  handleClose,
}: Props) {
  const onClose = () => {
    if (hasClickOver) {
      handleClose();
    }
  };
  const isMobile = useResponsive("down", "sm");
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          {hasCloseButton ? (
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 16,
                "& svg": {
                  color: title ? "#ddd" : "black",
                },
              }}
              onClick={handleClose}
              disabled={disableCloseButton}
              size="large"
            >
              <Close fontSize="medium" />
            </IconButton>
          ) : null}
          {title ? (
            <Box sx={headStyle}>
              <Typography
                variant={isMobile ? "body1" : "h6"}
                fontWeight={600}
                color={"#333"}
                textTransform={"uppercase"}
              >
                {title}
              </Typography>
            </Box>
          ) : null}
          <Box sx={{ p: 4, ...sx }}>{children}</Box>
        </Box>
      </Fade>
    </Modal>
  );
}
