Parse.initialize("JPHlNr3TE3RIPYYy111ibk4WIgQt5a2njYDXq4lY", "gjxIE1a0J2JLvxWnbcT3q3IOqOoOxCmCkrsBfloI");
Parse.serverURL = "https://parseapi.back4app.com/";

async function createParseOrder() {
    // Creates a new Parse "User" object, which is created by default in your Parse app
    let order = new Parse.Object("Order");
    // Set the input values to the new "User" object
    order.set("Massa", document.getElementById("Massa").value);
    order.set("Tamanho", document.getElementById("Tamanho").value);
    order.set("Sabor", document.getElementById("Sabor").value);
    order.set("Username", document.getElementById("Username").value);

    try {
      // Call the save method, which returns the saved object if successful
      order = await order.save();
      if (order !== null) {
        // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
        alert(
          `Pedido cadastrado com sucesso! ID do pedido: ${
            order.id
          }, ${order.get("Username")}`
        );
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
  
  // Add on click listener to call the create parse user function
  document.getElementById("createButton").addEventListener("click", async function () {
    createParseOrder();
  });
  