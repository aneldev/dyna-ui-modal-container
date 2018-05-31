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
export declare class ModalContainer extends React.Component<IModalContainerProps, IModalContainerState> {
    constructor(props: IModalContainerProps);
    refs: {
        container: HTMLDivElement;
    };
    update(updateContent: IModalContainerUpdate): void;
    private readonly baseClassName;
    private readonly className;
    private children;
    private onClick;
    private handleClick(event);
    render(): JSX.Element;
}
