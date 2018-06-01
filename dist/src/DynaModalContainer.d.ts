import * as React from "react";
export interface IDynaModalContainerProps {
    className?: string;
    show: boolean;
    children: any;
    onClick?: () => void;
    onShow?: () => void;
    onHide?: () => void;
}
export declare class DynaModalContainer extends React.Component<IDynaModalContainerProps> {
    static defaultProps: IDynaModalContainerProps;
    private rootDivContainer;
    private modalContainer;
    private showValue;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private modalContainerDidMount(modalContainer);
    componentWillReceiveProps(nextProps: IDynaModalContainerProps): void;
    private show(showValue);
    render(): JSX.Element;
}
