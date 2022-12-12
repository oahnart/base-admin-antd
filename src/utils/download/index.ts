export const fileName = (url: string) => {
  const name = url.replace(/^.*[\\\/]/, "");
  console.log("fileName", name);
  return name;
};
