Parse.initialize("JPHlNr3TE3RIPYYy111ibk4WIgQt5a2njYDXq4lY", "gjxIE1a0J2JLvxWnbcT3q3IOqOoOxCmCkrsBfloI");
Parse.serverURL = "https://parseapi.back4app.com/";

async function createParseOrder() {

    let order = new Parse.Object("Order");

    order.set("Massa", document.getElementById("Massa").value);
    order.set("Tamanho", document.getElementById("Tamanho").value);
    order.set("Sabor", document.getElementById("Sabor").value);
    order.set("Username", document.getElementById("Username").value);

    try {

        order = await order.save();
        if (order !== null) {

            alert(
                `Pedido cadastrado com sucesso! ID do pedido: ${order.id
                }, ${order.get("Username")}`
            );
        }

        document.getElementById("Massa").value = "";
        document.getElementById("Tamanho").value = "";
        document.getElementById("Sabor").value = "";
        document.getElementById("Username").value = "";

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

document.getElementById("createButton").addEventListener("click", async function () {
    createParseOrder();
});
