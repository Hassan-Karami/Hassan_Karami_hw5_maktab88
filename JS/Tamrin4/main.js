let str = "hello world";
function case_insensitie_search(str, char) {
  if (
    typeof str !== "string" ||
    typeof char !== "string" ||
    str.length === 0 ||
    char.length === 0
  ) {
    return "!Invalid Parameters";
  }
  str = str.toLowerCase();
  char = char.toLowerCase();
  if (str.includes(char)) {
    return true;
  }
  return false;
}
console.log(case_insensitie_search("hello world", "Hello"));
console.log(case_insensitie_search("hello world", "hello"));
console.log(case_insensitie_search("hello world", "hi"));
console.log(case_insensitie_search("hello world", ""));
