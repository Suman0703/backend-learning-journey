// DNS module helps work with domain names and IP addresses

const dns = require("dns");

// Finds IP address from domain
dns.lookup("google.com", (err, address, family) => {

    console.log("IP Address:");
    console.log(address);

    console.log("\nIP Version:");
    console.log(family);

});

// Gets IPv4 addresses
dns.resolve4("google.com", (err, addresses) => {

    console.log("\nIPv4 Addresses:");
    console.log(addresses);

});

// Gets IPv6 addresses
dns.resolve6("google.com", (err, addresses) => {

    console.log("\nIPv6 Addresses:");
    console.log(addresses);

});

// Converts IP address into domain name
dns.reverse("8.8.8.8", (err, hostnames) => {

    console.log("\nHostnames:");
    console.log(hostnames);

});

// Shows DNS servers
console.log("\nDNS Servers:");
console.log(dns.getServers());