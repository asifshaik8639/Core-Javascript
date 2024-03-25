function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fileContent = "This is the content of the file.";
        resolve(fileContent);
      }, 1000);
    });
}
  
  async function processFile() {
    try {
      const content = await readFileAsync("example.txt");
      console.log("File content: " + content);
      console.log("Test 1  " );
      console.log("Test 2  " );
      console.log("Test 3  " );
    } catch (error) {
      console.error("Error reading file: " + error);
    }
  }
  
  processFile();
  