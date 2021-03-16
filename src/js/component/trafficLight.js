import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState(null);

	return (
		<div>
			<div className="top bg-dark"></div>
			<div className="trafficlight bg-dark">
				<div
					className={"circle red " + (color == "red" ? "glow" : null)}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"circle yellow " + (color == "yellow" ? "glow" : null)
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"circle green " + (color == "green" ? "glow" : null)
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
