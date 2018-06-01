import * as React from "react";

import "./ModalContainer.less";

export interface IModalContainerProps {
}

export interface IModalContainerState {
	className?: string;
	show?: boolean;
}

export interface IModalContainerUpdate {
	className?: string;
	show?: boolean;
	children?: any;
	onClick?: () => void;
}

export class ModalContainer extends React.Component<IModalContainerProps, IModalContainerState> {
	constructor(props: IModalContainerProps) {
		super(props);
		this.state = {
			className: '',
			show: false,
		}
	}

	public refs: {
		container: HTMLDivElement;
	};

	public update(updateContent: IModalContainerUpdate): void {
		const newState: IModalContainerState = {};
		if (updateContent.className !== undefined) newState.className = updateContent.className;
		if (updateContent.show !== undefined) newState.show = updateContent.show;
		if (updateContent.children !== undefined) this.children = updateContent.children;
		if (updateContent.onClick !== undefined) this.onClick = updateContent.onClick;
		this.setState(newState);
	}

	private readonly baseClassName: string = "dyna-internal-modal-container";
	private readonly className = (subClassName: string = "", active: boolean = true): string => active ? `${this.baseClassName}${subClassName}` : "";
	private children: any = null;
	private onClick: () => void = () => undefined;

	private handleClick(event: MouseEvent): void {
		if (event.target === this.refs.container) this.onClick();
	}

	public render(): JSX.Element {
		const {
			className: userClassName,
			show,
		} = this.state;

		const className: string = [
			userClassName,
			this.className(),
			this.className(show ? '--show' : '--hide'),
		].join(' ').trim();

		return (
			<div
				className={className}
				ref="container"
				onClick={this.handleClick.bind(this)}
			>{this.children}</div>
		);
	}
}
