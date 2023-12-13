"use client";

import type React from "react";
import { useIsClient } from "@uidotdev/usehooks";

type ClientOnlyProps = Readonly<{
	children: React.ReactNode;
	placeholder?: React.ReactNode;
}>;

// https://github.com/uidotdev/usehooks/issues/259
export default function ClientOnly({ children, placeholder }: ClientOnlyProps) {
	const isClient = useIsClient();

	if (!isClient) {
		return placeholder || null;
	}

	return children;
}
