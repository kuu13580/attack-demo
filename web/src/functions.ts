export const getCookies = () => {
  if (!document.cookie) {
    return [];
  }
  const cookies = document.cookie.split(";");
  const cookiesArray: { name: string; value: string }[] = [];
  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookiesArray.push({ name: key.trim(), value: value.trim() });
  });
  return cookiesArray;
};
