import React from "react";
import { env } from "~/env.js";

type VisuallyHiddenProps = Readonly<{
	id?: string;
	children?: string | string[];
}>;

export default function VisuallyHidden({ id, children }: VisuallyHiddenProps) {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		if (env.NEXT_PUBLIC_DEV) {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Alt") {
					setForceShow(true);
				}
			};

			const handleKeyUp = (event: KeyboardEvent) => {
				if (event.key === "Alt") {
					setForceShow(false);
				}
			};

			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("keyup", handleKeyUp);

			return () => {
				window.removeEventListener("keydown", handleKeyDown);
				window.removeEventListener("keyup", handleKeyUp);
			};
		}

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {};
	}, []);

	if (forceShow) {
		return <span id={id} className="text-xs">{children}</span>;
	}

	return <span id={id} className="sr-only">{children ?? ""}</span>;
}
