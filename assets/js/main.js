const init = () => {
  const getAdvice = async () => (
    await fetch(`https://api.adviceslip.com/advice`, { cache: 'reload' })
      .then((res) => res.json())
    );

  const updateAdvice = async () => {
    const result = await getAdvice();
    updateAdviceText(result.slip.id, result.slip.advice);
  }

  const updateAdviceText = (id, advice) => {
    document.querySelector("span").textContent = id;
    document.querySelector(".main-text p").textContent = `"${advice}"`;
  }

  const diceButton = document.querySelector(".dice-button button");
  diceButton.addEventListener("click", () => {
    try {
      (async () => await updateAdvice())();
    } catch (error) {
      console.log(error);
      console.log("Sorry, something went wrong with the request");
    }
  });

  // Update advice at first draw.
  updateAdvice();
};
init();
