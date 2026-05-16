// OS module gives system and operating system information

const os = require("os");

// Shows operating system platform
console.log("Platform:");
console.log(os.platform());

// Shows CPU architecture
console.log("\nArchitecture:");
console.log(os.arch());

// Shows computer name
console.log("\nHostname:");
console.log(os.hostname());

// Shows user home directory
console.log("\nHome Directory:");
console.log(os.homedir());

// Shows temporary folder path
console.log("\nTemporary Directory:");
console.log(os.tmpdir());

// Shows free RAM memory
console.log("\nFree Memory:");
console.log(os.freemem());

// Converts free memory into GB
const freeMemoryGB = os.freemem() / (1024 * 1024 * 1024);

console.log("\nFree Memory In GB:");
console.log(freeMemoryGB.toFixed(2), "GB");

// Shows total RAM memory
console.log("\nTotal Memory:");
console.log(os.totalmem());

// Converts total memory into GB
const totalMemoryGB = os.totalmem() / (1024 * 1024 * 1024);

console.log("\nTotal Memory In GB:");
console.log(totalMemoryGB.toFixed(2), "GB");

// Shows CPU information
console.log("\nCPU Info:");
console.log(os.cpus());

// Shows total CPU cores
console.log("\nCPU Core Count:");
console.log(os.cpus().length);

// Shows system uptime in seconds
console.log("\nSystem Uptime:");
console.log(os.uptime());

// Converts uptime into hours
const uptimeHours = os.uptime() / 3600;

console.log("\nSystem Uptime In Hours:");
console.log(uptimeHours.toFixed(2), "Hours");

// Shows current user information
console.log("\nUser Info:");
console.log(os.userInfo());

// Shows operating system type
console.log("\nOS Type:");
console.log(os.type());

// Shows operating system version
console.log("\nOS Release:");
console.log(os.release());

// Shows network information
console.log("\nNetwork Interfaces:");
console.log(os.networkInterfaces());

// Shows CPU byte order
console.log("\nEndianness:");
console.log(os.endianness());

// Shows average system load
console.log("\nLoad Average:");
console.log(os.loadavg());

// Shows operating system constants
console.log("\nOS Constants:");
console.log(os.constants);