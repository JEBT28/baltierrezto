function  CargarTabla() {

    var respuestaDB = [];

     $.get("php/app.php","",(resp)=>{
        autos = JSON.parse(resp);
        
    });

    respuestaDB  = autos;
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "700px",
    
        inserting: false,
        editing: false,
        sorting: true,
        paging: true,
    
        data: respuestaDB,
    
        fields: [
            { name: "Marca", type: "text", width: 100, validate: "required" },
            { name: "Modelo", type: "text", width: 100 },
            { name: "Año", type: "text", width: 50 },
            { name: "Color", type: "text", width: 100}       
        ]
    });
}
