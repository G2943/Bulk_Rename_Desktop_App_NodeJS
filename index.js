const fs = require('fs');

try {
  fs.readdir("data", (err, data)=>{
    console.log(data);
  })
 } catch (err) {
  console.error(err);
}
