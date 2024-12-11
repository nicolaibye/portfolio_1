export function enterClick(enterClickable) {
    document.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const target = document.querySelector(enterClickable);
            if (target && typeof target.click === "function") {
                target.click();
            } else if (target) {
                const customClick = new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                target.dispatchEvent(customClick);
                console.log("Custom click dispatched");
            }
        }
    });
}