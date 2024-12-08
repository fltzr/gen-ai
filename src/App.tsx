import { useEffectOnce } from "react-use";
import { Chat } from "./views/chat";
import { Mode, applyMode } from "@cloudscape-design/global-styles";

function App() {
	useEffectOnce(() => {
		applyMode(Mode.Dark);
	});

	return <Chat />;
}

export default App;
