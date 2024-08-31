export const getSpeech = (text: string, onEndCallback?: () => void) => {
  let voices: any[] = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }

  window.speechSynthesis.cancel();

  const speech = (txt: string) => {
    const lang = "ko-KR";
    const utterThis = new SpeechSynthesisUtterance(txt);

    utterThis.lang = lang;

    const kor_voice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
    );

    if (kor_voice) {
      utterThis.voice = kor_voice;
    } else {
      return;
    }

    if (onEndCallback) {
      utterThis.onend = onEndCallback;
    }

    window.speechSynthesis.speak(utterThis);
  };

  speech(text);
};
