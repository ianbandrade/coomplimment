import path from 'path';

const database = path.join(__dirname, 'src', 'database', 'db.sqlite');
const migrations = [
  path.join(__dirname, 'src', 'database', 'migrations', '*.ts'),
];
const entities = [path.join(__dirname, 'src', 'entities', '*.ts')];
const migrationsDir = path.join(__dirname, 'src', 'database', 'migrations');
const entitiesDir = path.join(__dirname, 'src', 'entities');

module.exports = {
  type: 'sqlite',
  database,
  migrations,
  entities,
  cli: {
    migrationsDir,
    entitiesDir,
  },
  logging: true,
};
