# About

It is an animation empty modal container on show/hide.

Shows a modal container rendering children.

Supported events: onBeforeShow, onAfterShow, onBeforeHide, onAfterHide, onClick.

Written in Typescript, runs everywhere.

# Demo

`npm run start`

# Usage

Render this component and handle the visibility through the `show` prop.

Do not unmount it because you will lose the animation of the hide. Just set the `show` prop to `true` or `false`.

The `children`are applied in a container that takes the whole visible screen's area. You are free there to adjust your content as you please, the container can choose among many styles.

Although it´s a react component, it doesn't render anything in real, it returns null.

When you pass the `show` prop the `true` this component creates another component as a last child of the `document.body`.
By this was we ensure that our modal will be always on top of any other according the sequence of `show: true` apply.

So event if we have multiple modals, they will be shown with the same sequence one above the other.

# z-index adjustment

It is not needed, but in case the application is already applying `z-index` on other children of the `body`, there is need to adjust the `z-index` of the dynamic containers created by `dyna-modal-container`.  

To do that,  define the proper `z-index` on the class `dyna-modal-container__root_container`.
This class is hardcoded and is intended to be used only for this reason, do not style it!

# Nested modals

Nested modals rendering are supported but care should be taken to hide them before unmount the owner.
If you remove the main modal, the rest will remain on the screen since in real are not rendered as nested.

So the rule is, hide `show: false` before unmount.

# Style

You can style the background of the modal container with class name.

By default it comes with `background-color: rgba(255,255,255, 0.6);` style, where is a transparent white, but you can override this and every modal may have it's own background color.

To style it:

- apply `className` on the component
- in the css, style this class with your desired `background-color` _or what ever_.

# Props

```
 interface IDynaModalContainerProps {
    className?: string; 
    show: boolean;          
    children: any;          
    disableBodyScrollOnShow?: boolean;
    onClick?: () => void;
    onBeforeShow?: () => void;
    onAfterShow?: () => void;
    onBeforeHide?: () => void;
    onAfterHide?: () => void;
}
```

## className?: string;

Apply a class name to style the modal container where is the wrapper of your children.

## show: boolean; (required)

To set visible or not the modal container.

## children: any; (required)

The content of the modal container.

## disableBodyScrollOnShow?: boolean; (default: true)

If it’s true, on `body`, the css `overflow-x: hidden` will be applied in order to block the scroll of the page. This might not be the best practice for your app, so setting this to `false` you disable this feature.

## onClick?: () => void;

This event is triggered only with the user clicks on the modal container. If you have covered the whole container you won’t get this event. 

This event is a helper to get the click event when the user clicks something out of your children components, in order to close the modal.

## onBeforeShow?: () => void;

Is called before showing the modal.

In general, there is no need to do anything.

## onAfterShow?: () => void;

Is called after showing the modal.

## onBeforeHide?: () => void;

Is called before the hide starts.

## onAfterHide?: () => void;

Is called after the hide is completed.
