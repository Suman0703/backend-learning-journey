const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);

const iv = crypto.randomBytes(16);

// Encrypt
const cipher = crypto.createCipheriv(
    algorithm,
    key,
    iv
);

let encrypted = cipher.update(
    "Secret Message",
    "utf8",
    "hex"
);

encrypted += cipher.final("hex");

console.log("Encrypted:");
console.log(encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    iv
);

let decrypted = decipher.update(
    encrypted,
    "hex",
    "utf8"
);

decrypted += decipher.final("utf8");

console.log("\nDecrypted:");
console.log(decrypted);