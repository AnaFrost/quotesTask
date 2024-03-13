import { StyledTable, TBody, TDataCell, THead, THeaderCell, TRow } from '@src/shared/Table/ui/Table.styled';

export interface ITableProps<T> {
	header: {
		key: keyof T;
		label: string;
	}[];
	data: Array<T & { id: number }>;
	handleRowClick?: (row: T & { id: number }) => void;
}

export const Table = <T,>({ header, data, handleRowClick }: ITableProps<T>) => {
	const onRowClick = (row: T & { id: number }) => {
		if (handleRowClick) {
			handleRowClick(row);
		} else {
			return;
		}
	};

	return (
		<StyledTable>
			<THead>
				<TRow>
					{header.map(({ key, label }) => (
						<THeaderCell key={String(key)}>{label}</THeaderCell>
					))}
				</TRow>
			</THead>
			<TBody>
				{data.map((item) => (
					<TRow key={item.id} onClick={() => onRowClick(item)}>
						{header.map(({ key }) => (
							<TDataCell key={String(item?.[key]) + String(key)}>{String(item?.[key]) || ''}</TDataCell>
						))}
					</TRow>
				))}
			</TBody>
		</StyledTable>
	);
};
