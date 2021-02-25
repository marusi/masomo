import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core'


enableProdMode();
const args = process.argv.slice(2);
if (args.length != 1) {
    process.stdout.write("Usage: node dist/main.js <url>");
    process.exit();
}

