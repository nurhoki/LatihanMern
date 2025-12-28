// fungsi memasak mie
function masakMie(rasa, ) {
    console.log(`Adik Memasak mie rasa ${rasa}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rasa) {
                resolve("mie dengan rasa " + rasa + " sudah  matang!🍝");
            } else {
                reject("gagal memasak mie karena rasa tidak tersedia😫");
            }
        }, 2000); 
    });
}

// FUNGSI ASYNC AWAIT
async function hidangkanMie(rasa) {
    try {
        const mie =  await masakMie("soto");
        console.log("Adik: " + mie);
    } catch (error) {
        console.log("Error " + error);
    }
}

// JALANKAN
console.log("ASYNC AWAIT");
console.log("Kakak mencuci piring...💧🍽💦");
hidangkanMie();
console.log("Kakak: piring sudah bersih!🍽");
