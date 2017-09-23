export function get(url) {
  var result = fetch(url, {
      method:"GET"
  });
  return result;
}
