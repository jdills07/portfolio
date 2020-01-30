
  function openTab(evt, tabName) {
    var i, tab, btntab;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
    btntab = document.getElementsByClassName("btntab");
    for (i = 0; i < btntab.length; i++) {
      btntab[i].className = btntab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }