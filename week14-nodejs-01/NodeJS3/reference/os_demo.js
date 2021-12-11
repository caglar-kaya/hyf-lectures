const os = require('os');

// Platform
console.log(os.platform()); // darwin

// CPU Architecture
console.log(os.arch()); // x64

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem()); // 106110976

// Total memory
console.log(os.totalmem()); // 8589934592

// Home dir
console.log(os.homedir()); // /Users/hackyourfuture

// Uptime
console.log(os.uptime()); // 3988580
