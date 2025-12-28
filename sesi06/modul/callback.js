// fungsi memasak mie
function masakMie(rasa, callback) {
    console.log(`Adik Memasak mie rasa ${rasa}...`);
    setTimeout(() => {
        callback("mie dengan rasa " + rasa + " sudah  matang!");
    }, 2000);
}

// MENGHIDANGKAN - CALLBACK
function hidangkanMie(mie) {
    console.log("Adik: " + mie);
}

// JALANKAN
console.log("Kakak mencuci piring...");
masakMie("ayam bawang", hidangkanMie);
console.log("Kakak: piring sudah bersih!");