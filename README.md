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

Run the validation script before committing or building the site:

```bash
node scripts/validate-frontmatter.js
```

### Pre-commit Hook (Optional)

To prevent invalid frontmatter from entering the repo, you can set up a pre-commit hook using [husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged):

1. Install dependencies:

```bash
npm install --save-dev husky lint-staged
```

2. Add to `package.json`:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "content/**/*.md": ["node scripts/validate-frontmatter.js"]
}
```

3. Initialize husky:

```bash
npx husky install
```

### Guidelines for AI Coding Agents

When using AI coding agents (Claude, Copilot, Cline + OpenRouter):

- Provide the frontmatter schema or example frontmatter as context in prompts
- Instruct agents to always include all required frontmatter fields with correct types
- Use the validation script to verify AI-generated content before committing
- Correct any frontmatter issues flagged by validation before merging

---

Following these steps will help maintain frontmatter consistency and prevent site build errors caused by malformed frontmatter.