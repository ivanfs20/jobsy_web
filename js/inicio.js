const MeetJobsy = document.getElementById('MeetJobsy');
const MeetJobsyDescription = document.getElementById('MeetJobsyDescription');
const PublicationTitleContract = document.getElementById('PublicationTitleContract');
const PublicationTitleContractDescription = document.getElementById('PublicationTitleContractDescription');
const DownloadTitle = document.getElementById('DownloadTitle');
const DownloadDescription = document.getElementById('DownloadDescription');
const ButtonDownload = document.getElementById('ButtonDownload');

async function translate(text) {
   const idioma = navigator.language;
   const language = idioma.split("-")[0];
   const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${"es"}|${"en"}`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);

   return data.responseData.translatedText;
}

translate(MeetJobsy.textContent).then(
    result => {
        MeetJobsy.textContent = result
    }
);

translate(MeetJobsyDescription.textContent).then(
    result => {
        MeetJobsyDescription.textContent = result
    }
);

translate(PublicationTitleContract.textContent).then(
    result => {
        PublicationTitleContract.textContent = result
    }
);

translate(PublicationTitleContractDescription.textContent).then(
    result => {
        PublicationTitleContractDescription.textContent = result
    }
);

translate(DownloadTitle.textContent).then(
    result => {
        DownloadTitle.textContent = result
    }
);

translate(DownloadDescription.textContent).then(
    result => {
        DownloadDescription.textContent = result
    }
);

translate(ButtonDownload.textContent).then(
    result => {
        ButtonDownload.textContent = result
    }
);

