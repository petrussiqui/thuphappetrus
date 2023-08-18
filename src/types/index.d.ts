interface Window {
  ethereum: any;
  bitkeep: any;
}

type TTableColumns = {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  format?: (value, row, index) => any;
};
