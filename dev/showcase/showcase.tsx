import * as React from 'react';
import {DynaModalContainer, IDynaModalContainerProps} from "../../src";

import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
  logo: <Logo />,
  views: [
	  {
	  	slug: "welcome",
		  title: "welcome",
		  center: true,
		  component: (
		  	<div>
				  <h1>how to see the modal examples</h1>
				  <p>Since the modal will cover the whole screen and you won't have access to aside bar, there is need to activate the keyboard arrow keys for navigation.</p>
				  <p>Press <a href="/?kbNav=yes">here</a> to activate them or alternative, press the <i className="fa fa-arrows"/> button at the bottom of the aside bar.</p>
				  <p>Then you will be able to navigate among the examples with the keyboard arrow keys.</p>
				  <p>Otherwise, click on the "go home" link on the modal to start from the beginning</p>
			  </div>
		  ),
	  },
    {
	    slug: 'main',
      title: 'simple modal',
      center: true,
      component: (
        <DynaModalContainer
	        className="my-modal-container"
	        show={null}
	        onClick={() => console.log('on click')}
	        onBeforeShow={() => console.log('on before show')}
	        onAfterShow={() => console.log('on after show')}
	        onBeforeHide={() => console.log('on before hide')}
	        onAfterHide={() => console.log('on after hide')}
        >
	        <div className="demo-content-content">
		        <p>demo content</p>
		        <a href="/?kbNav=yes">go home</a>
	        </div>
        </DynaModalContainer>
      ),
      props: [
        {
          slug: 'hide',
          title: 'hide',
          props: {
            show: false
          } as IDynaModalContainerProps
        },
        {
          slug: 'show',
          title: 'show',
          props: {
            show: true
          } as IDynaModalContainerProps
        },
      ]
    },
	  {
		  slug: 'multiple-modals',
		  title: 'multiple modal',
		  description: 'multiple modals on the same time',
		  center: true,
		  component: (
			  <div>
				  <DynaModalContainer
					  show
					  onClick={() => console.log('on click - C1')}
					  onBeforeShow={() => console.log('C1 - on before show')}
					  onAfterShow={() => console.log('C1 - on after show')}
					  onBeforeHide={() => console.log('C1 - on before hide')}
					  onAfterHide={() => console.log('C1 - on after hide')}
				  >
					  <div><h1>C1</h1></div>
				  </DynaModalContainer>
				  <DynaModalContainer
					  show
					  onClick={() => console.log('on click - C2')}
					  onBeforeShow={() => console.log('C2 - on before show')}
					  onAfterShow={() => console.log('C2 - on after show')}
					  onBeforeHide={() => console.log('C2 - on before hide')}
					  onAfterHide={() => console.log('C2 - on after hide')}
				  >
					  <div style={{paddingLeft: "62px"}}><h1>C2</h1></div>
				  </DynaModalContainer>
				  <DynaModalContainer
					  show
					  onClick={() => console.log('on click - C3')}
					  onBeforeShow={() => console.log('C3 - on before show')}
					  onAfterShow={() => console.log('C3 - on after show')}
					  onBeforeHide={() => console.log('C3 - on before hide')}
					  onAfterHide={() => console.log('C3 - on after hide')}
				  >
					  <div style={{paddingLeft: "128px"}}>
						  <h1>C3</h1>
						  <a href="/?kbNav=yes">go home</a>
					  </div>
				  </DynaModalContainer>
			  </div>
		  ),
	  },
	  {
		  slug: "the-end",
		  title: "the end",
		  center: true,
		  component: <h4>the end</h4>
	  },
  ]
}as IShowcase;
