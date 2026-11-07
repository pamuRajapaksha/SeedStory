
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('seedstory.db');

export function initializeDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS seeds (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      season TEXT,
      duration TEXT NOT NULL,
      description TEXT
    );
  `);
}
