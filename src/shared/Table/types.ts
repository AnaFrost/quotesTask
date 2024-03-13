import { Side } from '@src/app/services/api/types';

export interface IQuoteTableData {
	sequence: number;
	side: Side;
	price: string;
	bestBidPrice: string;
	bestAskPrice: string;
	id: number;
}
