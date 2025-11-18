const DescriptionTeteocan = document.getElementById('DescriptionTeteocan');
const LocationTeteocan = document.getElementById('Location');

async function translate(text) {
   const idioma = navigator.language;
   const language = idioma.split("-")[0];
   const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${"es"}|${"en"}`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

   return data.responseData.translatedText;
}

translate(DescriptionTeteocan.textContent).then(
    result => {
        DescriptionTeteocan.textContent = result
    }
);

translate(LocationTeteocan.textContent).then(
    result => {
        LocationTeteocan.textContent = result
    }
);
