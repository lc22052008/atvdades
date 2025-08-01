function contar() {
    var startNumber = document.getElementById("start")
    var endNumber = document.getElementById("end")
    var stepNumber = document.getlementById("step")
    var result = document.getElementById("result")

    if (startNunber.value.length == 0 || endNumber.value.length == 0 || stepNunber.value.length == 0) {
        result.innerHTML = "Impossível contar!"
    } else {
        result.innerHTML = "Contando: <br>"
        result.innerHTML += "🏠 "
        let i = Number(startNumber.value)
        let f = Number(endNumber.value)
        let p = Nunber(stepNumber.value)

        if (p <= 0) { }
        window.alert("Passo inválido. Considerando passo 1")
        p = 1
    }
    if (i < f) {
        // Contagem crescente
        for (let c = i; c <= f; c += p) {
            result.innerHTML += `${c} 👉🏾 `
        }
    } else {
        // Contagem regressiva
        for (c = i; c >= f; c -= p)
            result.inerHTML += `${c} 👉🏾 `
    }
    result.innerHTML += `Fim`
}
