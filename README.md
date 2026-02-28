
const statusCode = 200; // change this to test other codes

switch (statusCode) {
  case 200:
    console.log("PASS - OK: Request successful");
    break;
  case 201:
    console.log("PASS - Created: Resource created successfully");
    break;
  case 301:
    console.log("WARNING - Moved Permanently: URL has changed");
    break;
  case 400:
    console.log("FAIL - Bad Request: Check request payload");
    break;
  case 401:
    console.log("FAIL - Unauthorized: Check auth token");
    break;
  case 403:
    console.log("FAIL - Forbidden: Insufficient permissions");
    break;
  case 404:
    console.log("FAIL - Not Found: Check endpoint URL");
    break;
  case 500:
    console.log("FAIL - Internal Server Error: Backend issue");
    break;
  default:
    console.log("UNKNOWN - Unhandled status code");
}
--------------------------------------------------------------

const results = ["pass", "fail", "skip", "pass", "pass", "fail"];

// Counters
let passed = 0;
let failed = 0;
let skipped = 0;
const total = results.length;

if(total>0){
    for (let i = 0; i < results.length; i++) {
  const r = String(results[i]).trim().toLowerCase();
  if (r === "pass") {
    passed++;
  } else if (r === "fail") {
    failed++;
  } else if (r === "skip") {
    skipped++;
  } else {
    skipped++;
  }
}
console.log(`Total tests     : ${total}`);
console.log(`Passed          : ${passed}`);
console.log(`Failed          : ${failed}`);
}
else{
    console.log("results are empty")
}
-----------------------------------------------------------




