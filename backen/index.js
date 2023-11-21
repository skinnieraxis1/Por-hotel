const express = require("express");
const PORT = process.env.PORT || 3050;
const app = express();

//Funciones habitaciones

app.get("/AgregarHabitacion", (req, res) => {
res.json({ message: "Agregar Habitacion" });
});

app.get("/MostrarHabitacionesDisponibles", (req, res) => {
res.json({ message: "Mostrar Habitacion disponibles" });
});

app.get("/MostrarTodasHabitacionesDisponibles", (req, res) => {
  res.json({ message: "Mostrar Habitacion" });
});

app.get("/EliminarHabitacion", (req, res) => {
  res.json({ message: "Eliminar Habitacion" });
});

app.get("/EditarEstadoHabitacion", (req, res) => {
  res.json({ message: "Editar estado de la Habitacion" });
});
  
//Funciones hoteles

app.get("/AgregarHotel", (req, res) => {
  res.json({ message: "Agregar Hotel" });
});

app.get("/MostrarHotel", (req, res) => {
 res.json({ message: "Mostrar Hotele" });
});

app.get("/EliminarHotel", (req, res) => {
  res.json({ message: "Eliminar Hotel" });
});

app.get("/EditarHotel", (req, res) => {
  res.json({ message: "Editar Hotel" });
});

app.get("/PuntuarHotel", (req, res) => {
  res.json({ message: "Puntuar Hotel" });
});

//Funciones usuarios

app.get("/RegistrarUsuario", (req, res) => {
  res.json({ message: "Registrar usuario" });
});

app.get("/MostrarUsuarios", (req, res) => {
  res.json({ message: "Mostrar usuarios" });
});

app.get("/EliminarUsuario", (req, res) => {
  res.json({ message: "Eliminar usuario" });
});

app.get("/EditarUsuario", (req, res) => {
  res.json({ message: "Editar usuario" });
});

app.get("/IniciarSesion", (req, res) => {
  res.json({ message: "Iniciar sesion" });
});
    

app.listen(PORT, () => {
  console.log(`Server listening on
${PORT}`);
});