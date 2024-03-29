import { AppConfig } from "settings";
import moment from "moment";

export const _formatNumber = (str: any, length = 8) => {
  if (str) {
    //just 8 decimals when number
    if (typeof str === "number") {
      str = Math.floor(str * 1.0e8) / 1.0e8;
    } else {
      //remove text
      str = str.replace(/[^\d.]/g, ""); //clear text
    }
    str += "";
    const x = str.split(".");
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? "." + x2.slice(0, length) : "";
    if (!x1) x1 = "0";
    let result = x1 + x3;
    return result;
  } else {
    return 0;
  }
};

export const deleteText = (str: any) => {
  str += "";
  const deleteText = str.replace(/[^\d.]/g, ""); //clear text
  return deleteText;
};

export function formatAddress(string: any, length = 10) {
  if (string) {
    if (string.length > length * 2) {
      return (
        string.slice(0, length) + "..." + string.slice(string.length - length)
      );
    } else {
      return string;
    }
  } else return null;
}

export function formatAmount(str: any) {
  let deleteText: string | 0 = Number(str)
    .toFixed(8)
    .replace(/\.?0+$/, "");
  deleteText = deleteText !== "NaN" ? deleteText : 0;
  const x = deleteText.toString().split(".");
  let x1 = x[0];
  const x2 = x[1];
  const x3 = x.length > 1 ? "." + x2.slice(0, 8) : "";
  if (!x1) x1 = "0";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1,$2");
  }
  let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
  return result;
}

export function formatPrice(str: any, length = 8) {
  str += "";
  let deleteText = str.replace(/[^\d.]/g, ""); //clear text
  // deleteText = Math.floor(deleteText * 1.0e8) / 1.0e8;
  const x = deleteText.toString().split(".");
  let x1 = x[0];
  const x2 = x[1];
  const x3 = x.length > 1 ? "." + x2.slice(0, length) : "";
  if (!x1) x1 = "0";
  let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
  return result;
}

export function formatNumberWithDecimal(str: any, length = 8) {
  if (str) {
    //just 8 decimals when number
    if (typeof str === "number") {
      str = Math.floor(str * 1.0e8) / 1.0e8;
    } else {
      //remove text
      str = str.replace(/[^\d.]/g, ""); //clear text
    }
    str += "";
    const x = str.split(".");
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? "." + x2.slice(0, length) : "";
    if (!x1) x1 = "0";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1,$2");
    }
    let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
    return result;
  } else {
    return 0;
  }
  // str += "";
  // let deleteText = str.replace(/[^\d.]/g, ""); //clear text
  // deleteText = Math.floor(deleteText * 1.0e8) / 1.0e8;
  // const x = deleteText.toString().split(".");
  // let x1 = x[0];
  // const x2 = x[1];
  // const x3 = x.length > 1 ? "." + x2.slice(0, length) : "";
  // if (!x1) x1 = "0";
  // const rgx = /(\d+)(\d{3})/;
  // while (rgx.test(x1)) {
  //   x1 = x1.replace(rgx, "$1,$2");
  // }
  // let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
  // return result;
}

export function formatUSD(str: any) {
  str += "";
  let deleteText = str.replace(/[^\d.]/g, ""); //clear text
  deleteText = Math.floor(deleteText * 1.0e8) / 1.0e8;
  const x = deleteText.toString().split(".");
  let x1 = x[0];
  const x2 = x[1];
  const x3 = x.length > 1 ? "." + x2.slice(0, 2) : "";
  if (!x1) x1 = "0";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1,$2");
  }
  let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
  return result;
}

export function HTMLConverter(str: any) {
  str = str.replace(/(<)/gi, "&lt;");
  str = str.replace(/(<)/gi, "&lg;");
  str = str.replace(/#(.+?)(?=[\s.,:,]|$)/g, "<span>#$1</span>");
  str = str.replace(/@(.+?)(?=[\s.,:,]|$)/g, "<span>@$1</span>");
  str = str.replace(
    // eslint-disable-next-line no-useless-escape
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g,
    "<a href='$1' target='_blank' class='linked'>$1</a>"
  );
  str = str.replace(/(?:\r\n|\n\r|\r|\n)/g, "<br />");
  return str;
}

export function _linkToBlockChain(str: any) {
  return `${AppConfig.ETHERSCAN_LINK}${str}`;
}

export function formatBigNumber(str: any) {
  const num = Math.abs(Number(str));
  let result;
  if (num >= 1.0e9) {
    // Nine Zeroes for Billions
    const decimal = Math.floor((num - Math.floor(num / 1.0e9) * 1.0e9) / 1.0e7);
    result =
      Math.floor(num / 1.0e9) +
      "." +
      (decimal > 9 ? decimal : "0" + decimal) +
      "B";
  } else {
    if (num >= 1.0e6) {
      // Six Zeroes for Millions
      const decimal = Math.floor(
        (num - Math.floor(num / 1.0e6) * 1.0e6) / 1.0e4
      );
      result =
        Math.floor(num / 1.0e6) +
        "." +
        (decimal > 9 ? `${decimal}` : `0${decimal}`) +
        "M";
    } else {
      if (num >= 1.0e3) {
        // Three Zeroes for Thousands
        const decimal = Math.floor(
          (num - Math.floor(num / 1.0e3) * 1.0e3) / 1.0e1
        );
        result =
          Math.floor(num / 1.0e3) +
          "." +
          (decimal > 9 ? `${decimal}` : `0${decimal}`) +
          "K";
      } else {
        return num;
      }
    }
  }
  return result;
}

export const formatShortNumber = (str: any) => {
  str += "";
  const deleteText = str.replace(/[^\d.]/g, ""); //clear text
  const x = deleteText.split(".");
  let x1 = x[0];
  const x2 = x[1];
  const x3 = x.length > 1 ? "." + x2.slice(0, 2) : "";
  if (!x1) x1 = "0";
  if (x1.length > 6) {
    return formatBigNumber(x1);
  }
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1,$2");
  }
  let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
  return result;
};

export const toLowerCase = (str: any) => {
  str += "";
  return str.toLowerCase();
};
export const toUpperCase = (str: any) => {
  str += "";
  return str.toUpperCase();
};

export const _formatNameToLink = (string: any) => {
  return string
    .toLowerCase()
    .replace("'", "")
    .replace(/\s/g, "_")
    .replace(/-/g, "_");
};

export const _formatTime = (time: string) => {
  return moment.utc(time).local().format("YYYY-MM-DD HH:mm (UTC Z)");
};
export const _formatTimeUTC = (time: string) => {
  return moment.utc(time).format("YYYY-MM-DD HH:mm");
};

export const _formatDate = (time: any) => {
  return moment.utc(time).local().format("YYYY-MM-DD");
};

export const _formatUtcUnix = (time: string) => {
  return moment.utc(time).unix();
};

export function formatDisplayName(string: any, length = 10) {
  if (string) {
    if (string.length > length) {
      return string.slice(0, length) + "...";
    } else {
      return string;
    }
  } else return null;
}
