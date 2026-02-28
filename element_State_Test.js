// Element State Evaluation Function
function evaluateElement(isPresent, isDisplayed, isEnabled) {
  let state;

  if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
  } else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
  } else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
  } else if (isPresent === false) {
    state = "NOT FOUND";
  } else {
    state = "UNKNOWN";
  }

  // Severity via ternary
  const severity =
    state === "NOT FOUND"
      ? "CRITICAL"
      : (state === "HIDDEN" || state === "DISABLED")
      ? "WARNING"
      : "OK";

  // Recommended actions per state
  let action;
  switch (state) {
    case "READY":
      action = "Proceed: interact with the element (click/type).";
      break;
    case "DISABLED":
      action = "Wait/Resolve: verify preconditions or remove 'disabled' state before interacting.";
      break;
    case "HIDDEN":
      action = "Wait/Scroll/Reveal: ensure element is visible (scroll, hover, expand, or wait for animation).";
      break;
    case "NOT FOUND":
      action = "Investigate locator/network: confirm selector, ensure element renders, and check timing.";
      break;
    default:
      action = "Validate test setup and inputs; unexpected state encountered.";
      break;
  }

  // Print the report
  console.log("=== Element Check ===");
  console.log(`isPresent  : ${isPresent} `);
  console.log(`isDisplayed: ${isDisplayed} `);
  console.log(`isEnabled  : ${isEnabled} `);
  console.log(`State      : ${state}`);
  console.log(`Severity   : ${severity}`);
  console.log(`Action     : ${action}`);

  return { state, severity, action };
}

evaluateElement(true, true, true);     // READY / OK
evaluateElement(true, true, false);    // DISABLED / WARNING
evaluateElement(true, false, true);    // HIDDEN / WARNING
evaluateElement(false, false, false);  // NOT FOUND / CRITICAL
evaluateElement(true, false, false);   // HIDDEN / WARNING