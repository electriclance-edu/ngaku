function onload() {
  Infobox.initialize();
}
class Infobox {
  static initialize() {
    Infobox.infobox = document.getElementById("infobox");
    Infobox.infoboxDesc = document.getElementById("infoboxDesc");
  }
  static display(infoObj) {
    //toggle infobox if disabled
    if (this.infobox.style.bottom == "-200px") {
      Infobox.revealInfobox();
    }
    document.getElementById("infoboxTitle").innerHTML = infoObj.name;
    Typewriter.write(infoObj.desc,this.infoboxDesc);
  }
  static hideInfobox() {
    this.infobox.style.bottom = "-200px";
  }
  static revealInfobox() {
    this.infobox.style.bottom = "15px";
  }
}
function hide(id) {
  document.getElementById(id).style.opacity = 0;
  document.getElementById(id).style.pointerEvents = "none";
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
