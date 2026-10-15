# Ledger

Ledger is an early React and JavaScript app for helping small businesses track
income and expenses and reason about pricing. The current scaffold is
intentionally small; it does not yet save transactions.

## Requirements

- Node.js 22.13 or newer
- npm

## Run the app

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Run the local schema tests with
`npm test`.

## Workers AI structured-output smoke test

The smoke test sends a fixed, fictional receipt through Mastra to Cloudflare
Workers AI, then validates the structured result locally. It does not save
anything. Do not put credentials in source control.

In PowerShell, set a Cloudflare API token and account ID in the current shell:

```powershell
$env:CLOUDFLARE_API_KEY = "<your-cloudflare-api-token>"
$env:CLOUDFLARE_ACCOUNT_ID = "<your-cloudflare-account-id>"
npm run smoke:workers-ai
```

The test currently targets
`@cf/meta/llama-3.1-8b-instruct`. Cloudflare JSON Mode is not guaranteed to
produce semantically correct values; the schema check is only a structural
guard. Review all model-generated financial data before using it.
