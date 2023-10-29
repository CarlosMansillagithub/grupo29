<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background: rgb(29, 29, 29);
            color: white;
        }

        table,
        th,
        td {
            border: 1px solid rgb(255, 255, 255);
            border-collapse: collapse;
        }

        td>img {
            width: 100px;
        }
    </style>
</head>

<body>
    <div id="filtrador">
        <label> Filtrar: green=Light, yellow=Medio, red=Calorico: </label>
        <input id="inputColor" type="text" onkeyup="handlerFiltrarPorColor()">
    </div>
    <hr>
    <div id="SemaforoDeCaloriasContainer">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Foto</th>
                <th>Color</th>
                <th>Calorias</th>
            </tr>
        </table>
        <p id="pNoHayCalorias">Uuuuhhh, no hay datos de calorías...</p>
    </div>
    <script src="../js/data.js"></script>
    <script src="../js/SemaforoCaloriasConJSVanilla.js"></script>
    <p> <a href="../index.html">Volver pagina principal</a></p>
</body>

</html>
