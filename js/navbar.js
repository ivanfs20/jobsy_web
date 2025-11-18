const Inicio = document.getElementById('Inicio');
const Ventajas = document.getElementById('Ventajas');
const Funcionalidades = document.getElementById('Funcionalidades');
const Servicios = document.getElementById('Servicios');
const Inversion = document.getElementById('Inversion');
async function translate(text) {
   const idioma = navigator.language;
   const language = idioma.split("-")[0];
   const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${"es"}|${"en"}`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

   return data.responseData.translatedText;
}


translate(Inicio.textContent).then(
    result => {
        Inicio.textContent = result
    }
);

translate(Ventajas.textContent).then(
    result => {
        Ventajas.textContent = result
    }
);

translate(Funcionalidades.textContent).then(
    result => {
        Funcionalidades.textContent = result
    }
);

translate(Servicios.textContent).then(
    result => {
        Servicios.textContent = result
    }
);

translate(Inversion.textContent).then(
    result => {
        Inversion.textContent = result
    }
);