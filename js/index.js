const titleWelcome = document.getElementById('titleWelcome');
const descriptionWelcome = document.getElementById('descripcionWelcome');

async function translate(text) {
   const idioma = navigator.language;
   const language = idioma.split("-")[0];
   const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${"es"}|${"en"}`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

   return data.responseData.translatedText;
}

translate(titleWelcome.textContent).then(
   result =>{
      titleWelcome.textContent = result
   }
);

translate(descriptionWelcome.textContent).then(
   result =>{
      descriptionWelcome.textContent = result
   }
);

alert(descriptionWelcome.textContent);
