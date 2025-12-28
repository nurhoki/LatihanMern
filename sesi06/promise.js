// fungsi memasak mie
function masakMie(rasa, ) {
    console.log(`Adik Memasak mie rasa ${rasa}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rasa) {
                resolve("mie dengan rasa " + rasa + " sudah  matang!");
            } else {
                reject("gagal memasak mie karena rasa tidak tersedia😫");
            }
        }, 2000); 
    });
}

// MENGHIDANGKAN - CALLBACK
function hidangkanMie(mie) {
    console.log("Adik: " + mie);
}

// JALANKAN
console.log("Kakak mencuci piring...");
masakMie("soto").then((mie) => {
    console.log("Adik: " + mie);
}).catch((error) => {
    console.log("Adik: " + error);
});
console.log("Kakak: piring sudah bersih!");