export interface IResponse {
	statusCode: number;
}

export interface ISuccessResponse<T> extends IResponse {
	data: T;
	error: null;
}

export interface IErrorResponse extends IResponse {
	error: {
		message: string | string[];
	};
	data: null;
}

export interface IBaseError {
	message: string;
	code: number;
}

export interface IPoloniexResponse {
	code: string;
	data?: Datum[];
	msg?: string;
}

export interface Datum {
	sequence: number;
	symbol: string;
	side: Side;
	size: number;
	price: string;
	bestBidSize: number;
	bestBidPrice: string;
	bestAskPrice: string;
	tradeId: string;
	bestAskSize: number;
	ts: number;
}

export enum Side {
	Buy = 'buy',
	Sell = 'sell',
}
