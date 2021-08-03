function displayOnInfobox(infoObj) {
  //toggle infobox if disabled
  var infobox = document.getElementById("infobox");
  if (infobox.style.bottom == "-200px") {
    infobox.style.bottom = "15px";
  }
  document.getElementById("infoboxTitle").innerHTML = infoObj.name;
  Typewriter.write(infoObj.desc,document.getElementById("infoboxDesc"));
}
class Infospring {
  static scroll(section) {
    var sections = document.getElementById("infospring").querySelectorAll('h2');
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].innerHTML == section) {
        sections[i].focus();
        return;
      }
    }
  }
}
class Typewriter {
  static write(text,element) {
    Typewriter.reset();

    Typewriter.buffer = text;
    Typewriter.element = element;
    Typewriter.currentIndex = 1;
    element.innerHTML = "";
    Typewriter.interval = setInterval(function(){
      if (Typewriter.currentIndex % 20 < 10 && Typewriter.currentIndex < Typewriter.buffer.length) {
        element.innerHTML = text.substr(0,Typewriter.currentIndex) + " █";
      } else {
        element.innerHTML = text.substr(0,Typewriter.currentIndex);
      }
      Typewriter.currentIndex++;

      if (Typewriter.currentIndex > Typewriter.buffer.length) {
        Typewriter.reset();
      }
    },30);
  }
  static reset() {
    Typewriter.buffer = "";
    Typewriter.element = "";
    Typewriter.currentIndex = 1;
    clearInterval(Typewriter.interval);
  }
}
