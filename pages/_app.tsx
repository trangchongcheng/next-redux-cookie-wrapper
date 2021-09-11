import type {AppProps} from "next/app";
import * as React from "react";
import App, { AppContext } from 'next/app';
import {wrapper} from "../store";
import { Header } from "../header";

const MyApp = ({Component, pageProps}: AppProps) => {
	
	{return (<Header><Component {...pageProps} /></Header>)}
	
};

// App.getInitialProps = wrapper.getInitialAppProps(store => async (appContext:AppContext) => {

// // 	return {
// // 		pageProps: {
// // 			...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
// // 			pathname: ctx.pathname,
// // 		},
// // 	};
// const appProps = await App.getInitialProps(appContext);
// return { ...appProps };
// });

MyApp.getInitialProps = wrapper.getInitialAppProps(
	(state) => async (appContext: AppContext) => {
	  const appProps = await App.getInitialProps(appContext);
	  return { ...appProps };
	}
  );

export default wrapper.withRedux(MyApp);
