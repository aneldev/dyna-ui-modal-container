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
      slug: 'hide',
      title: 'simple modal',
      center: true,
      component: (
        <DynaModalContainer
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
		  slug: "the-end",
		  title: "the end",
		  component: <h4>the end</h4>
	  },
  ]
}as IShowcase;
