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
	        show={null}
          onClick={() => console.log('on click')}
	        onHide={() => console.log('on hide')}
        >modal content</DynaModalContainer>
      ),
      wrapperStyle:{
      },
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
