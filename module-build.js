/**
 * Converts a byte array into a passphrase.
 * @param {Buffer} bytes The bytes to convert
 * @returns {Array.<string>}
 */u$f.bytesToPassphrase=function(e){if(!o$i.isBuffer(e)&&!("object"===typeof window&&e instanceof window.Uint8Array))throw new Error("Input must be a Buffer or Uint8Array.");if(e.length%2===1)throw new Error("Only even-sized byte arrays are supported.");const i=[];for(var a of e.entries()){let r=a[0];let n=a[1];let t=e[r+1];if(r%2===0){let e=256*n+t;let a=s$j[e];if(!a)throw new Error("Invalid byte encountered");i.push(a);}}return i};
/**
 * Converts a phrase back into the original byte array.
 * @param {Array.<string>} words The words to convert
 * @returns {Buffer}
 */u$f.passphraseToBytes=function(e){if(!Array.isArray(e))throw new Error("Input must be an array.");const i=o$i.alloc(2*e.length);e.forEach((e,a)=>{if("string"!==typeof e)throw new Error("Word must be a string.");const r=l$e(s$j,e.toLowerCase(),(e,i)=>e===i?0:e>i?1:-1);if(r<0)throw new Error(`Invalid word: ${e}`);i[2*a]=Math.floor(r/256);i[2*a+1]=r%256;});return i};
/**
 * Generates a random passphrase with the specified number of bytes.
 * NOTE: `size` must be an even number.
 * @param {number} size The number of random bytes to use
 * @returns {Array.<string>}
 */u$f.generatePassphrase=function(e){if("number"!==typeof e||e<0||e>d$a)throw new Error(`Size must be between 0 and ${d$a} bytes.`);const i=c$d(e);return u$f.bytesToPassphrase(i)};"object"===typeof window&&(window.niceware=u$f);t$e=u$f;var g$a=t$e;const nicewarePhrase="\n    wreath feint durneder worrier jenny ladrone \n    pinochle nonelective secrete seemed overcrowding \n    kiln refusing vaccination haploidy garnishable\n",bytes=g$a.passphraseToBytes(nicewarePhrase.trim().replace(/\s+/g," ").split(" ")),phrase=b$9.entropyToMnemonic(bytes);console.log("New phrase is: "+phrase);