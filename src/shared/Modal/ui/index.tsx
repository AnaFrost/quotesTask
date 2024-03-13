import { Modal } from '@mui/material';
import { ModalContainer } from '@src/shared/Modal/ui/Modal.styled';
import { observer } from 'mobx-react';
import { ReactElement } from 'react';

interface IModalProps {
	onClose: () => void;
	children: ReactElement;
	open: boolean;
}

export const BasicModal = observer(({ children, onClose, open }: IModalProps) => {
	return (
		<Modal open={open} onClose={onClose}>
			<ModalContainer>{children}</ModalContainer>
		</Modal>
	);
});
