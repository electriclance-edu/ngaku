function onload() {
  Infobox.initialize();
  Infospring.initialize();
  Infospring.open("spark_owl");
}
function nothing() {}
class Player {

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
  static initialize() {
    Infospring.elem = document.getElementById("infospring");
    Infospring.sectionsElement = document.getElementById("infospringSections");
    Player.infospring = {
      history:[],
      index:-1
    }
  }
  static scroll(section) {
    var sections = document.getElementById("infospring").querySelectorAll('h2');
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].innerHTML == section) {
        sections[i].focus();
        return;
      }
    }
  }
  //converts text ids used in referring to sections and articles (eg. "spark_owl") to non-computer form (eg. "Spark owl")
  static idToName(id) {
    id = id.split("_");
    id[0] = id[0][0].toUpperCase() + id[0].substr(1,id[0].length);

    for (var i = 1; i < id.length; i++) {
      id[0] += " " + id[i];
    }

    return id[0];
  }
  static moveAlongHistory(magnitude = 1,overwriteHistory = false,newHistoryPoint) {
    Player.infospring.index += magnitude;
    var indexIsWithinHistory = Player.infospring.index >= 0 && Player.infospring.index < Player.infospring.history.length;
    if (overwriteHistory) {
      //if within the range of history, delete all history points >= the current index
      if (indexIsWithinHistory) {
        var amountOfFutureHistoryPoints = Player.infospring.history.length - (Player.infospring.index) + 1;
        Player.infospring.history.splice(Player.infospring.index,amountOfFutureHistoryPoints);
      }
      //then push the current history point and open it
      Player.infospring.history.push(newHistoryPoint);
      Infospring.display(newHistoryPoint[0],newHistoryPoint[1]);
    } else {
      if (!indexIsWithinHistory) {
        //when outside the range of history, revert index
        Player.infospring.index -= magnitude;
      } else {
        //when within the range of history, move normally
        var currentHistoryPoint = Player.infospring.history[Player.infospring.index];
        Infospring.display(currentHistoryPoint[0],currentHistoryPoint[1]);
      }
    }
  }
  static open(articleId,scrollPoint) {
    Infospring.moveAlongHistory(1,true,[articleId,scrollPoint]);
  }
  static display(articleId,scrollPoint) { //scrollPoint is optional
    //reset content of infospring
    var contentsBox = document.getElementById("infospringContents");
    contentsBox.innerHTML = "";
    var sectionsParent = document.getElementById("infospringSections");
    var sections = document.getElementById("infospringSections").children;
    for (var i = 2; i < sections.length;) {
      sectionsParent.removeChild(sections[i]);
    }
    document.getElementById("infospringDatabox").style.display = "block";
    document.getElementById("infospringDataboxHeader").innerHTML = "";
    document.getElementById("infospringDataboxCaption").innerHTML = "";
    document.getElementById("infospringSubtext").innerHTML = "";
    document.getElementById("infospringDataboxInformationSections").innerHTML = "";
    //change title
    var articleHeader = document.getElementById("infospringHeader")
    articleHeader.innerHTML = Infospring.idToName(articleId);

    if (scrollPoint != undefined) {
      var sectionClarification = document.createElement("span");
      sectionClarification.className = "grey normalText";
      sectionClarification.innerHTML = "→ " + Infospring.idToName(scrollPoint);

      articleHeader.appendChild(sectionClarification);
    }
    //check if articleId is invalid, and if so, display message and hide unnecessary sections
    if (!infospringArticles.hasOwnProperty(articleId)) {
      document.getElementById("infospringSubtext").appendChild(Infospring.createSectionElement(
        ["The article '" + Infospring.idToName(articleId) + "' (id: " + articleId + ") does not exist. Perhaps the archives are incomplete."]
      ));
      console.warn("Infospring.open(): Article with id:" + articleId + " does not exist.")
      sectionsParent.style.display = "none";
      return false;
    } else {
      sectionsParent.style.display = "block";
    }
    //change subtext
    if (infospringArticles[articleId].hasOwnProperty("pretext")) {
      document.getElementById("infospringSubtext").appendChild(Infospring.createSectionElement(infospringArticles[articleId].pretext));
    }
    if (infospringArticles[articleId].hasOwnProperty("sections")) {
      //load contentsBox
      var sectionTitles = Object.keys(infospringArticles[articleId].sections);
      for (var i = 0; i < sectionTitles.length; i++) {
        if (sectionTitles[i] == "skip") {
          continue;
        }
        var sectionLink = document.createElement("span");
        sectionLink.setAttribute("onclick","Infospring.scroll(this.innerHTML)");
        sectionLink.innerHTML = Infospring.idToName(sectionTitles[i]);
        sectionLink.className = "link";

        contentsBox.appendChild(sectionLink);
      }
      //load sections
      Infospring.parseSections(infospringArticles[articleId].sections);
    } else {
      console.warn("Infospring.open(): article with id:" + articleId + " is missing property:sections");
    }
    //load databox
    if (!infospringArticles[articleId].hasOwnProperty("databox")) {
      document.getElementById("infospringDatabox").style.display = "none";
    } else {
      Infospring.loadDatabox(infospringArticles[articleId].databox);
    }

    if (scrollPoint != undefined) {
      Infospring.scroll(Infospring.idToName(scrollPoint));
    } else {
      Infospring.scroll(Infospring.idToName(articleId));
    }
    return true;
  }
  static loadDatabox(databoxData) {
    //change header
    document.getElementById("infospringDataboxHeader").innerHTML = databoxData.header;
    //change image
    document.getElementById("infospringDataboxImg").src = databoxData.image;
    //change caption
    document.getElementById("infospringDataboxCaption").innerHTML = databoxData.caption;
    //change info
    var sectionParent = document.getElementById("infospringDataboxInformationSections");
    var sectionTitles = Object.keys(databoxData.sections)
    for (var i = 0; i < sectionTitles.length; i++) {
      var header = document.createElement("h4");
      header.innerHTML = Infospring.idToName(sectionTitles[i]);
      sectionParent.appendChild(header);
      sectionParent.appendChild(Infospring.createSectionElement(databoxData.sections[sectionTitles[i]]));
    }
  }
  static parseSections(sectionsData) {
    var sectionTitles = Object.keys(sectionsData);
    //parse the first section first, since it doesnt have a header+hr bit
    Infospring.sectionsElement.appendChild(Infospring.createSectionElement(sectionsData[sectionTitles[0]]));

    for (var i = 1; i < sectionTitles.length; i++) {
      var sectionElement = Infospring.createSectionElement(sectionsData[sectionTitles[i]]);

      var header = document.createElement("h2");
      header.setAttribute("tabindex","-1");
      header.innerHTML = Infospring.idToName(sectionTitles[i]);

      sectionElement.prepend(document.createElement("hr"));
      sectionElement.prepend(header);
      Infospring.sectionsElement.appendChild(sectionElement);
    }
  }
  static createSectionElement(sectionData) {
    var sectionElement = document.createElement("div");
    sectionElement.className = "section";
    for (var i = 0; i < sectionData.length; i++) {
      var sectionPartData = sectionData[i].split("|");
      var sectionPart = document.createElement("p");

      for (var j = 0; j < sectionPartData.length; j++) {
        //logically, every other element should be one encased in ||'s, and we only want to put the non||'s into the text raw, so do that
        if (j % 2 == 0) {
          sectionPart.innerHTML += sectionPartData[j];
        } else {
          sectionPart.appendChild(Infospring.createLinkElement(sectionPartData[j]));
        }
      }
      sectionElement.appendChild(sectionPart);
    }
    return sectionElement;
  }
  static createLinkElement(linkData) {
    //linkData is formatted |function name・parameter1,parameter2...・content・className| <-- this is converted to span element
    linkData = linkData.split("・");

    var link = document.createElement("span");
    link.innerHTML = linkData[0];
    //set classname
    if (linkData.length == 4) {
     link.className = linkData[3];
    } else {
      link.className = "link";
    }
    //assemble function
    var assembledFunction = "";
    if (linkData[1] == "open") {
      linkData[1] = "Infospring.open";
      var articleId = linkData[2].split(",")[0];
      articleId = articleId.substring(1,articleId.length - 1);
      if (!infospringArticles.hasOwnProperty(articleId)) {
        link.className = "invalidLink link";
      }
    }
    assembledFunction += linkData[1] + "(" + linkData[2] + ")";
    //set onclick
    link.setAttribute("onclick",assembledFunction);

    return link;
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
