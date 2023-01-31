import "$styles/popup.scss";
import Popup from "$components/root/Popup.svelte";

const popup = new Popup({
	target: document.getElementById("app") as any,
});

export default popup;
