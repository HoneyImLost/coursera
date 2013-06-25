#!/usr/bin/env node
var fs = require('fs');
var outfile = "100primes.txt";

var nPrimes = 100;    // Number of primes to compute
var primes = new Array();

function isPrime(n) {
    for (j = 2; j <= Math.sqrt (n); j++) {
        if (n % j == 0)
        	return false;
    }
    return true;
}

for (i = 2; i < Number.MAX_VALUE; i++) {
    if (isPrime(i)) {
        nPrimes--;
        primes.push(i);
        if (nPrimes == 0)
			break;
    }
}

var out = primes[0];
for (k = 1; k < primes.length; k++) {
	out += "," + primes[k];
}

fs.writeFileSync(outfile, out);  