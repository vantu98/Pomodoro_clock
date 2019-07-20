// Dat gia tri ban dau cho dong ho

var timeout = null;

function start(min, sec) {
  //CHUYEN DOI DU LIEU

  //Neu so giay = -1 tuc la chay het so giay
  //+ giam phut xuong 1 don vi
  //+ dat lai so giay = 59

  if (sec === -1) {
    min -= 1;
    sec = 59;
  }

  //Neu so phut = -1 tuc la het gio
  // Dung chuong trinh

  if (min === -1) {
    clearTimeout(timeout);
    alert("Time out");
    return false;
  }

  // HIEN THI DONG HO

  document.getElementById("min").innerText = min.toString();
  document.getElementById("sec").innerText = sec.toString();

  // GIAM SO PHUT XUONG 1S VA GOI LAI SAU 1S

  timeout = setTimeout(() => {
    sec--;
    start(min, sec);
  }, 1000);
}

function stop() {
  clearTimeout(timeout);
}

function doTomato(min, sec) {
  stop();
  start(min, sec);
}

function setDefault(){
    stop();
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
}