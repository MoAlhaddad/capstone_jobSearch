

module.exports = {

   successMessage:  (message) => {
    console.log("\x1b[32m", message);
   },

   errorMessage: (message) => {
       console.log("\x1b[41m", message);
   }
} 


