import * as React from "react";
import "./App.scss";
import { default as Workspace } from "./Layout";

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<Workspace />
			</div>
		);
	}
}

export default App;
