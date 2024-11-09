function tungXucXac() {
    return Math.floor(Math.random() * 6) + 1;
}

function choiTaiXiu() {
    const choice = document.querySelector('input[name="choice"]:checked');
    if (!choice) {
        alert("Vui long chon Tai hoac Xiu");
        return;
    }

    const xucXac1 = tungXucXac();
    const xucXac2 = tungXucXac();
    const tong = xucXac1 + xucXac2;
    const result = document.getElementById("result");

    let ketQua = (tong >= 3 && tong <= 10) ? "xiu" : "tai";

    result.innerHTML = `Ket qua: Xuc xac 1 = ${xucXac1}, Xuc xac 2 = ${xucXac2}, Tong = ${tong}<br>`;

    if (ketQua === choice.value) {
        result.innerHTML += "<b>Chuc mung! Ban doan dung!</b>";
    } else {
        result.innerHTML += "<b>Rat tiec, ban doan sai roi!</b>";
    }
}
