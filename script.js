function carregar() {
  const msg = window.document.getElementById('msg');
  const img = window.document.getElementById('imagem');
  const date = new Date();
  const hora = date.getHours();
  // const hora = 9;

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = './img/manha.png';
    document.body.style.background = '#e5d8cf';
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = './img/tarde.png';
    document.body.style.background = '#bbc8d0';
  } else {
    //Boa noite
    img.src = './img/noite.png';
    document.body.style.background = '#3b3e45';
  }
}
