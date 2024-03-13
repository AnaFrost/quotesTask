import { API_URL } from '@src/app/constants';
import { IBaseError, IErrorResponse, IPoloniexResponse, ISuccessResponse } from '@src/app/services/api/types';
import { IQuoteTableData } from '@src/shared/Table/types';

export const getQuotesApi = async (
	quote: string,
	signal?: AbortSignal,
): Promise<ISuccessResponse<IQuoteTableData[]> | IErrorResponse | null> => {
	const uniq = quote.charCodeAt(0);
	try {
		const res = await fetch(API_URL, { signal });

		if (res.ok) {
			const resData: IPoloniexResponse = await res.json();

			if (!resData.data) {
				throw { message: 'Нет данных', code: res.status } as IBaseError;
			}

			const filtredData =
				uniq & 1
					? resData.data.filter((el) => el.sequence % 2 !== 0)
					: resData.data.filter((el) => el.sequence % 2 === 0);

			return {
				statusCode: res.status,
				error: null,
				data: filtredData.map((item) => ({
					sequence: item.sequence,
					side: item.side,
					price: item.price,
					bestBidPrice: item.bestBidPrice,
					bestAskPrice: item.bestAskPrice,
					id: item.sequence,
				})),
			};
		} else {
			throw { message: 'Не удалось выполнить запрос', code: res.status } as IBaseError;
		}
	} catch (e) {
		const err = e as IBaseError;
		if (err.code === 20) return null;
		return {
			statusCode: err.code,
			error: {
				message: err.message,
			},
			data: null,
		};
	}
};
