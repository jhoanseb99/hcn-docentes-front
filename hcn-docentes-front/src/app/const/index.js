export const URL = "http://104.44.129.29:3600";

export function getQueryParams(filters) {
  let ans = "";
  let first = true;
  for (const filter in filters) {
    if (filters[filter] !== "") {
      var str;
      if (first) [str, first] = ["?", false];
      else str = "&";
      
      switch (filter) {
        default:
          ans += str + `${filter}=${filters[filter]}`; 
          break;
      }
    }
  }
  return ans;
}