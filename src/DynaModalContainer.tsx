import * as React from "react";
import * as ReactDOM from "react-dom";

import {ModalContainer} from "./components/ModalContainer";

const ANIMATION_DURATION: number = 250; // #animation

export interface IDynaModalContainerProps {
	className?: string;
	show: boolean;
	children: any;
	onClick?: () => void;
	onShow?: () => void;
	onHide?: () => void;
}

export class DynaModalContainer extends React.Component<IDynaModalContainerProps> {
	static defaultProps: IDynaModalContainerProps = {
		className: "",
		show: false,
		children: null,
		onClick: () => undefined,
		onShow: () => undefined,
		onHide: () => undefined,
	};

	private rootDivContainer: HTMLDivElement;
	private modalContainer: ModalContainer;
	private showValue: boolean = false;

	public componentDidMount(): void {
		const {show} = this.props;
		this.show(show);
	}

	public componentWillUnmount(): void {
		if (this.rootDivContainer) {
			document.querySelector('body').removeChild(this.rootDivContainer);
		}
	}

	private modalContainerDidMount(modalContainer: ModalContainer): void {
		this.modalContainer = modalContainer;
		const {className, children, onClick} = this.props;
		this.modalContainer.update({className, children, onClick});
		this.show(this.props.show);
	}

	public componentWillReceiveProps(nextProps: IDynaModalContainerProps): void {
		const {className, children, onClick} = nextProps;
		if (this.modalContainer) this.modalContainer.update({className, children, onClick});
		this.show(nextProps.show);
	}

	private show(showValue: boolean): void {
		if (this.showValue === showValue) return; // exit, nothing to do
		this.showValue = showValue;
		const {onShow, onHide} = this.props;

		if (this.showValue) {
			// show
			this.rootDivContainer = document.createElement('div');
			this.rootDivContainer.classList.add('dyna-modal-container__root_container');
			document.querySelector('body').appendChild(this.rootDivContainer);
			ReactDOM.render(
				<ModalContainer ref={this.modalContainerDidMount.bind(this)}/>,
				this.rootDivContainer,
				() => {
					setTimeout(() => this.modalContainer.update({show: this.showValue}), 1);
					setTimeout(() => onShow(), ANIMATION_DURATION);
				},
			);
		}
		else {
			// hide
			if (!this.rootDivContainer) return; // there is nothing to hide
			this.modalContainer.update({show: this.showValue});
			const elementToRemove: HTMLDivElement = this.rootDivContainer;
			this.rootDivContainer = null;
			this.modalContainer = null;
			setTimeout(() => { // wait for the end of animation
				document.querySelector('body').removeChild(elementToRemove);
				if (!this.rootDivContainer) onHide();
			}, ANIMATION_DURATION);
		}
	}

	public render(): JSX.Element {
		return null;
	}
}
