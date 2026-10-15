import assert from 'node:assert/strict';
import test from 'node:test';
import { transactionDraftSchema } from '../../src/server/mastra/transaction-draft-schema.js';

const validDraft = {
  type: 'expense',
  description: 'USB-C charger',
  amountMinorUnits: 1875,
  currency: 'GBP',
  date: '2026-10-12',
  category: 'equipment',
};

test('accepts a complete transaction draft', () => {
  assert.deepEqual(transactionDraftSchema.parse(validDraft), validDraft);
});

test('rejects invalid amounts, currencies, dates, and extra fields', () => {
  assert.equal(
    transactionDraftSchema.safeParse({
      ...validDraft,
      amountMinorUnits: 18.75,
    }).success,
    false,
  );
  assert.equal(
    transactionDraftSchema.safeParse({ ...validDraft, currency: 'gbp' }).success,
    false,
  );
  assert.equal(
    transactionDraftSchema.safeParse({ ...validDraft, date: '12/10/2026' })
      .success,
    false,
  );
  assert.equal(
    transactionDraftSchema.safeParse({ ...validDraft, accountNumber: '123' })
      .success,
    false,
  );
});
