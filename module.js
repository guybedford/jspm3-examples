import bip39 from 'bip39';
import niceware from 'niceware';

// Phrase broken up into multiple lines for readability
// ⚠ You need to replace these 16 words with your own
//    Preserve the ` on lines 8 and 12
const nicewarePhrase = `
    wreath feint durneder worrier jenny ladrone 
    pinochle nonelective secrete seemed overcrowding 
    kiln refusing vaccination haploidy garnishable
`;

// Converts phrase to byte-array
const bytes = niceware.passphraseToBytes(
    // Remove non-essential white-space before splitting string
    nicewarePhrase.trim().replace(/\s+/g, " ").split(" ")
)

// Generate new string from the byte-array
const phrase = bip39.entropyToMnemonic(bytes);

// Share the new string with the user
console.log(`New phrase is: ${phrase}`);
