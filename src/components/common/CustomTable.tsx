import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import useResponsive from "hooks/useResponsive";
import { TypographyAccent } from "./CustomTypography";

export const tableStyle = {
  marginTop: "16px",
  position: "relative",
  boxShadow: "0 0 20px 0 rgb(0,0,0,0.08)",
  borderRadius: "15px",
  "& .MuiTable-root": {
    border: "solid 1px #FFF",
    background: "white",
    backdropFilter: "blur(5px)",
    color: "#fff",
    zIndex: 1,
    position: "relative",
  },
  "& .MuiTableHead-root": {
    borderRadius: "15px 15px 0 0",
    position: "relative",
    textAlign: "center",
    background: "linear-gradient(178deg, #FFC485 0%, #FFA543 100%)",
    backdropFilter: "blur(5px)",
    "&::before": {
      content: "''",
      position: "absolute",
      inset: "-1px",
      border: "1px solid #FFC485",
      borderRadius: "15px 15px 0 0",
      zIndex: "0",
    },
    "& .MuiTableCell-root": {
      color: "#fff!important",
      // textShadow: "0 0 5px rgb(255,255,255,0.5)",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "15px",
    },
  },
  "& .MuiTableCell-root": {
    borderBottom: "none",
    color: "#666",
    background: "unset!important",
    fontSize: "14px",
    "& p": {
      fontSize: "14px",
    },
  },
  "& tr:not(last-of-type) td": {
    borderBottom: "1px solid rgba(51, 51, 51, 0.07)!important",
  },
  "& tr:last-of-type td": {
    borderBottom: "none!important",
  },
};

export default function CustomTable({
  columns,
  data,
  setPage,
  showPagination = true,
  loading = false,
}: {
  columns: TTableColumns[];
  data: any;
  setPage?: any;
  showPagination?: boolean;
  loading?: boolean;
}) {
  const isMobile = useResponsive("down", "sm");
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = () => {};

  return (
    <>
      <TableContainer sx={tableStyle}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {isMobile ? (
                <TableCell></TableCell>
              ) : (
                columns.map((tableHead, index) => (
                  <TableCell
                    key={index}
                    align={"center"}
                    sx={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tableHead.label}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items.length > 0 ? (
              data?.items.map((row: any, rowIndex: number) =>
                isMobile ? (
                  <TableRow key={rowIndex}>
                    <TableCell>
                      {columns.map((col, i) => (
                        <Typography key={i} mt={0} mb={1} variant="body2">
                          {col.label}:{" "}
                          {col.format
                            ? col.format(row[col.key], row, rowIndex)
                            : row[col.key]}
                        </Typography>
                      ))}
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={rowIndex}>
                    {columns.map((col, index) => (
                      <TableCell key={index} align={"center"}>
                        {col.format
                          ? col.format(row[col.key], row, rowIndex)
                          : row[col.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  sx={{ textAlign: "center", height: 100 }}
                >
                  {loading ? (
                    <CircularProgress
                      sx={{
                        " svg": { color: "var(--primary)" },
                      }}
                    />
                  ) : (
                    <TypographyAccent variant="body1">
                      Not found
                    </TypographyAccent>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagination && data && data?.items?.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data?.itemCount}
          page={data?.page - 1}
          onPageChange={handleChangePage}
          rowsPerPage={data?.pageSize}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            mt: 5,
            color: "#fff",
            "& .MuiTablePagination-select": {
              alignItems: "center",
            },
            " .MuiIconButton-root": {
              zIndex: 9999,
            },
          }}
        />
      )}
    </>
  );
}
