// testScript.js

// Example test function
function add(a, b) {
    return a + b;
  }
  
  // Test cases
  function testAdd() {
    const result = add(2, 3);
    if (result === 5) {
      console.log('Test passed: add function');
    } else {
      console.error('Test failed: add function');
    }
  }
  
  // Run tests
  testAdd();
  