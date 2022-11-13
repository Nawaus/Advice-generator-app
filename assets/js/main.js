const init = () => {
  const diceButton = document.querySelector(".dice-button button");

  diceButton.addEventListener("click", () => {
    try {
      (async () => {
        const result = await fetch(`https://api.adviceslip.com/advice`).then(
          (res) => res.json()
        );
        const mainText = document.querySelector(".main-text p");
        const idAdviceContent = document.querySelector("span");
        const adviceText = result.slip.advice;
        const idText = result.slip.id;
        mainText.textContent = `"${adviceText}"`;
        idAdviceContent.textContent = idText;
        console.log(result);
      })();
    } catch (error) {
      console.log(error);
      console.log("Sorry, something went wrong with the request");
    }
  });
};
init();
