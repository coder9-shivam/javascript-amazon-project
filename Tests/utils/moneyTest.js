import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('Convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('Works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });

  it('negative number', () => {
    expect(formatCurrency(-2200.5)).toEqual('-22.00');
  });
});