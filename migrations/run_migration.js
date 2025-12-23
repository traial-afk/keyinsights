require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');
const fs = require('fs');

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Found' : 'Missing');
if (process.env.DATABASE_URL) {
    try {
        const url = new URL(process.env.DATABASE_URL);
        console.log('Host:', url.hostname);
        console.log('Port:', url.port);
    } catch (e) {
        console.log('Error parsing URL:', e.message);
    }
}

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function run() {
    try {
        await client.connect();
        const sql = fs.readFileSync('add_generated_reports_column.sql', 'utf8');
        await client.query(sql);
        console.log('Migration successful');
    } catch (err) {
        console.error('Migration failed', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

run();
