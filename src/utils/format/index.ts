/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2022-03-24 15:13:50
 * @modify date 2022-03-24 15:13:50
 * @desc [description]
 */

function format(mask: string, number: number) {
  if (number === undefined || number === null) return "";
  let v = String(number).replace(/\D/g, "");
  const numbers = v.replace(/[-]/g, "");
  var s = "" + numbers,
    r = "";
  for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
    r += mask.charAt(im) === "X" ? s.charAt(is++) : mask.charAt(im);
  }
  // console.log("format", r);
  return r;
}

export default format;
