const fs = require("fs");

const user={
    name: "Alice",
    age: 20,
    gender: "female"
};

fs.writeFileSync("user.json", JSON.stringify(user));

const data = JSON.parse(fs.readFileSync("user.json", "utf-8"));
console.log("User Data: ", data);
fs.unlinkSync("user.json");