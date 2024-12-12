export function myTimeBio(container) {
  document.addEventListener("DOMContentLoaded", () => {
    const myTimeBio = document.getElementById(container);
    myTimeBio.textContent = "";

    const updateTime = () => {
      const currentTimeNorway = new Date().toLocaleTimeString("nb-NO", {
        timeZone: "Europe/Oslo",
      });
      myTimeBio.textContent = `My time: ${currentTimeNorway}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  });
}
