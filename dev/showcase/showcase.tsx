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
		  component: <h1>welcome</h1>
	  },
    {
	    slug: 'main',
      title: 'simple modal',
      center: true,
      component: (
        <DynaModalContainer
	        key="single-demo"
	        className="my-modal-container"
	        show={null}
	        onClick={() => console.log('on click')}
	        onShow={() => console.log('on show')}
	        onHide={() => console.log('on hide')}
        >
	        <div className="demo-content-content">
		        demo content
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
					  key="multiple-demo"
					  show
					  onClick={() => console.log('on click - C1')}
					  onShow={() => console.log('on show - C1')}
					  onHide={() => console.log('on hide - C1')}
				  >
					  <div><h1>C1</h1></div>
				  </DynaModalContainer>
				  <DynaModalContainer
					  show
					  onClick={() => console.log('on click - C2')}
					  onShow={() => console.log('on show - C2')}
					  onHide={() => console.log('on hide - C2')}
				  >
					  <div style={{paddingLeft: "62px"}}><h1>C2</h1></div>
				  </DynaModalContainer>
				  <DynaModalContainer
					  show
					  onClick={() => console.log('on click - C3')}
					  onShow={() => console.log('on show - C3')}
					  onHide={() => console.log('on hide - C3')}
				  >
					  <div style={{paddingLeft: "128px"}}><h1>C3</h1></div>
				  </DynaModalContainer>
			  </div>
		  ),
	  },
	  {
		  slug: "the-end",
		  title: "the end",
		  component: <h4>the end</h4>
	  },
  ]
}as IShowcase;
