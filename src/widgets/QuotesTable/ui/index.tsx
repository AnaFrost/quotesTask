import { Alert, Skeleton, Snackbar, Typography } from '@mui/material';
import { QUOTES } from '@src/app/constants';
import { getQuotesApi } from '@src/app/services/api/quotesApi';
import quotesStore from '@src/app/store';
import { BasicModal as Modal } from '@src/shared/Modal';
import { Table } from '@src/shared/Table';
import { IQuoteTableData } from '@src/shared/Table/types';
import { ModalContentList } from '@src/widgets/QuotesTable/ui/QuotesTable.styled';
import { observer } from 'mobx-react';
import { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const QuotesTable = observer(() => {
	const { quote: quotePage } = useParams();
	const [timeStamp, setTimeStamp] = useState<number>(new Date().getDate());

	if (!quotePage || !QUOTES.includes(quotePage)) return <Navigate to={`/quotes/${QUOTES[0]}`} />;

	useEffect(() => {
		if (quotesStore.quotes) {
			quotesStore.setQuotes(null);
		}
		const ac = new AbortController();
		const fetchData = async () => {
			const signal = ac.signal;
			const ts = new Date().getTime();
			const data = await getQuotesApi(quotePage, signal);

			if (data?.error) {
				console.error(data.error);
				quotesStore.setError(data.error.message || 'Что-то пошло не так');
			} else if (data?.data && ts > timeStamp) {
				quotesStore.setQuotes(data?.data);
				setTimeStamp(new Date().getTime());
			}
		};

		fetchData();
		return () => {
			ac.abort();
		};
	}, [quotePage]);

	useEffect(() => {
		const ac = new AbortController();
		let timer: NodeJS.Timeout;
		if (quotePage && !quotesStore.selectedQuote) {
			const fetchData = async () => {
				const signal = ac.signal;
				const ts = new Date().getTime();
				const data = await getQuotesApi(quotePage, signal);

				if (data?.error) {
					console.error(data.error);
					quotesStore.setError(data.error.message || 'Что-то пошло не так');
				} else if (data?.data && ts > timeStamp) {
					quotesStore.setQuotes(data?.data);
					setTimeStamp(ts);
				}
			};
			timer = setInterval(() => {
				fetchData();
			}, 5000);
		}
		return () => {
			ac.abort();
			clearInterval(timer);
		};
	}, [quotePage, quotesStore.selectedQuote]);

	const handleRowClick = useCallback((row: IQuoteTableData) => {
		quotesStore.setSelectedQuote(row);
	}, []);

	return (
		<>
			<Typography variant="h4" align="center">
				Котировки {quotePage}
			</Typography>
			{quotesStore.quotes == null ? (
				<Skeleton variant="rectangular" animation="wave" height={600} width={1200} />
			) : (
				<Table<IQuoteTableData>
					data={quotesStore?.quotes || []}
					header={[
						{ key: 'sequence', label: 'Последовательность' },
						{ key: 'side', label: 'Покупка/Продажа' },
						{ key: 'price', label: 'Цена' },
						{ key: 'bestBidPrice', label: 'Лучшая ставка' },
						{ key: 'bestAskPrice', label: 'Лучшая запрашиваемая цена' },
					]}
					handleRowClick={handleRowClick}
				/>
			)}

			<Modal open={Boolean(quotesStore.selectedQuote)} onClose={() => quotesStore.setSelectedQuote(null)}>
				<ModalContentList>
					<li>
						<label>Последовательность: </label>
						{quotesStore.selectedQuote?.sequence}
					</li>
					<li>
						<label>Покупка/Продажа: </label>
						{quotesStore.selectedQuote?.side}
					</li>
					<li>
						<label>Цена: </label>
						{quotesStore.selectedQuote?.price}
					</li>
					<li>
						<label>Лучшая ставка: </label>
						{quotesStore.selectedQuote?.bestBidPrice}
					</li>
					<li>
						<label>Лучшая запрашиваемая цена: </label>
						{quotesStore.selectedQuote?.bestAskPrice}
					</li>
				</ModalContentList>
			</Modal>
			<Snackbar
				open={Boolean(quotesStore.error)}
				autoHideDuration={4000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert onClose={() => quotesStore.setError(null)} severity="error" variant="filled" sx={{ width: '100%' }}>
					{quotesStore.error}
				</Alert>
			</Snackbar>
		</>
	);
});
