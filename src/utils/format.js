import { replace } from 'lodash';
import numeral from 'numeral';
import moment from 'moment';
import { format, formatDistanceToNow } from 'date-fns';
// component
import Label from '../components/Label';

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '0,0' : '0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date, timeZone = 0) {
  return moment.utc(date).utcOffset(timeZone).format('yyyy-MM-DD hh:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function fAddress(string, length = 6) {
  if (string) {
    if (string.length > length * 2) {
      return `${string.slice(0, length)}...${string.slice(string.length - length)}`;
    }
    return string;
  }
  return null;
}

export function fDisplayName(string, length = 16) {
  if (string) {
    if (string.length > length) {
      return `${string.slice(0, length)}...`;
    }
    return string;
  }
  return null;
}

export function fStatus(status, msg) {
  const successComp = <Label color="success">{msg || status}</Label>;
  const warningComp = <Label color="warning">{msg || status}</Label>;
  const errorComp = <Label color="error">{msg || status}</Label>;

  switch (status) {
    case true:
    case 'ACTIVE':
    case 'SUCCESS':
      return successComp;
    case 'REPAIRING':
    case 'PENDING':
      return warningComp;
    case false:
    case 'INACTIVE':
      return errorComp;
    default:
      return <Label>{msg || status}</Label>;
  }
}

export function fAmount(number, fix) {
  try {
    let str = `${number}`;
    if (str.indexOf('e') >= 0) {
      str = `${number.toFixed(8)}`;
    }
    const deleteText = str.replace(/[^\d.]/g, '');
    const x = deleteText.split('.');
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? `.${x2.slice(0, fix || 8)}` : '';
    if (!x1) x1 = '0';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1,$2');
    }
    const result = (x1 + x3).replace(/^0+(?!\.|$)/, '').replace(/^\./, '');
    return `${number < 0 ? '-' : ''}${result}`;
  } catch (e) {
    return '0.00';
  }
}
