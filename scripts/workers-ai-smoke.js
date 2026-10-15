import { Agent } from '@mastra/core/agent';
import { transactionDraftSchema } from '../src/server/mastra/transaction-draft-schema.js';

const requiredEnvironment = ['CLOUDFLARE_API_KEY', 'CLOUDFLARE_ACCOUNT_ID'];
const missingEnvironment = requiredEnvironment.filter((name) => !process.env[name]);

if (missingEnvironment.length > 0) {
  throw new Error(
    `Set ${missingEnvironment.join(' and ')} before running npm run smoke:workers-ai.`,
  );
}

const agent = new Agent({
  id: 'ledger-structured-output-smoke',
  name: 'Ledger structured-output smoke test',
  instructions:
    'Extract one transaction from the user message. Use only the supplied details; do not invent missing values.',
  model: 'cloudflare-workers-ai/@cf/meta/llama-3.1-8b-instruct',
});

const response = await agent.generate(
  'Fictional receipt: Cable Shop, USB-C charger, £18.75, purchased on 2026-10-12. This is a business expense for equipment.',
  {
    structuredOutput: {
      schema: transactionDraftSchema,
    },
  },
);

const transactionDraft = transactionDraftSchema.parse(response.object);
console.log('Workers AI structured-output smoke test passed:');
console.log(JSON.stringify(transactionDraft, null, 2));
