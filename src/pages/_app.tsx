import React from "react";
import { type AppType } from "next/app";
import { api } from "@utils/api.ts";
import "~/styles/globals.css";

// eslint-disable-next-line react/function-component-definition, react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

export default api.withTRPC(MyApp);
