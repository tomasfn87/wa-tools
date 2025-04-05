import gmailFormat from "./gmailFormat.js";

process.argv[2] && console.log(gmailFormat(process.argv[2]));
