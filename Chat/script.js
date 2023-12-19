function verificarRolagem() {
    var div = document.getElementById("chat-area");

    var estaNoFinal = div.scrollHeight - div.scrollTop === div.clientHeight;

    if (estaNoFinal) {
      console.log("Está no final!");
    } else {
      console.log("Não está no final.");
    }
}