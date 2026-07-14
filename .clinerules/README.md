# PM Learning Tool

## Frontmatter Schema and Validation

This project uses a strict frontmatter schema for all markdown content files to ensure consistency and prevent site build errors.

### Frontmatter Schema

The schema is defined in `schemas/frontmatter.schema.json`. It requires the following fields:

- `title` (string)
- `slug` (string)
- `module` (string)
- `order` (integer)
- `status` ("draft" or "published")
- `estimatedMinutes` (integer)
- `prerequisites` (array of strings)
- `recommendedReading` (array of objects with `title`, `url`, and `required` boolean)
- `flashcards` (array of strings)

### Validation Script

A validation script is provided at `scripts/validate-frontmatter.js`. It:

- Recursively scans all `.md` files in the `content/` directory
- Extracts and parses frontmatter
- Validates frontmatter against the schema
- Logs errors and fails if any frontmatter is invalid

### Usage

Run the validation script when updating content and before committing or building the site:

```bash
node scripts/validate-frontmatter.js
```
