import { IQuoteTableData } from '@src/shared/Table/types';
import { action, makeObservable, observable } from 'mobx';

class QuotesStore {
	@observable selectedQuote: IQuoteTableData | null = null;
	@observable quotes: IQuoteTableData[] | null = null;
	@observable error: string | string[] | null = null;

	@action setSelectedQuote(quote: IQuoteTableData | null) {
		this.selectedQuote = quote;
	}

	@action setQuotes(quotes: IQuoteTableData[] | null) {
		this.quotes = quotes;
		this.error = null;
	}

	@action setError(message: string | string[] | null) {
		this.error = message;
	}

	constructor() {
		makeObservable(this);
	}
}

const quoteStore = new QuotesStore();

export default quoteStore;
