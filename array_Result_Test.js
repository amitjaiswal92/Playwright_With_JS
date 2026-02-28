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