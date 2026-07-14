import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ajv = new Ajv({ allErrors: true, strict: false });
const frontmatterSchema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../schemas/frontmatter.schema.json'), 'utf-8'));

const validate = ajv.compile(frontmatterSchema);

function getMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(file));
    } else if (file.endsWith('.md')) {
      results.push(file);
    }
  });
  return results;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch (e) {
    return null;
  }
}

function validateFrontmatter(file) {
  const content = fs.readFileSync(file, 'utf8');
  const frontmatter = extractFrontmatter(content);
  if (!frontmatter) {
    console.error(`No or invalid frontmatter in file: ${file}`);
    return false;
  }
  const valid = validate(frontmatter);
  if (!valid) {
    console.error(`Frontmatter validation errors in file: ${file}`);
    console.error(validate.errors);
    return false;
  }
  return true;
}

function main() {
  const contentDir = path.resolve(__dirname, '../content');
  const files = getMarkdownFiles(contentDir);
  let allValid = true;
  files.forEach(file => {
    if (!validateFrontmatter(file)) {
      allValid = false;
    }
  });
  if (!allValid) {
    console.error('Frontmatter validation failed.');
    process.exit(1);
  } else {
    console.log('All frontmatter validated successfully.');
  }
}

main();
