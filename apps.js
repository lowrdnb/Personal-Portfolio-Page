const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('me').style.color = "#" + randomColor;
    //document.h1.style.backgroundColor = "#" + randomColor;
    //color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();


  
  const timeContainer = document.getElementById("time-container");
  const BIRTH_DAY = "07-06-1989";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
  }, 1000);
