// finance.ts
// small functions around finance

function calcLoan(
	iPrincipal: number,
	iInterestRate: number,
	iDuration: number,
	iTarget: number
): number {
	let rAnnuity = 0;
	if (!isNaN(iPrincipal) && !isNaN(iInterestRate) && !isNaN(iDuration) && !isNaN(iTarget)) {
		rAnnuity = 1;
	}
	return rAnnuity;
}

interface tLoanYear {
	principal: number;
	interest: number;
	reimbursement: number;
	remaining: number;
}

export type { tLoanYear };
export { calcLoan };
