function HTMLConverter(str: string) {
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

function fixedTextContent(text: string, before: number = 0, after: number = 0) {
  const beforeText = text.substring(0, before);
  const afterText = text.substring(text.length - after, text.length);
  if (text.length > 15) {
    return `${beforeText}...${afterText}`;
  }
  return text;
}

export function address(text: string, length: number = 8) {
  if (text) {
    if (text.length > 15) {
      return `${text.substring(0, length)}...${text.substring(
        text.length - length,
        text.length
      )}`;
    }
    return text;
  }
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
}

export const FormatHelper = {
  HTMLConverter,
  address,
  formatNumberWithDecimal,
  fixedTextContent,
};

export function fCurrency(number: any, fix: any) {
  try {
    let str = number + "";
    if (str.indexOf("e") >= 0) {
      str = number.toFixed(8) + "";
    }
    const deleteText = str.replace(/[^\d.]/g, ""); //clear text
    const x = deleteText.split(".");
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? "." + x2.slice(0, fix || 8) : "";
    if (!x1) x1 = "0";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1,$2");
    }
    let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
    return `${number < 0 ? "-" : ""}${result}`;
  } catch (e) {
    return "0.00";
  }
}

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
