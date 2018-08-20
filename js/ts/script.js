
	var word = "";
	var montoSoles  = 0;
	var cuotas  = 0;
	var montoCuota  = 0;

   document.getElementById("btnExportExcel").onclick = function() {
        CreateExcelFile();
    
        var blob = new Blob([word], { type: 'application/vnd.ms-word' });
        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
            window.navigator.msSaveBlob(blob, "formatoPerson.doc");
        } else {
            this.download = "formatoPersona.doc";
            this.href = window.URL.createObjectURL(blob);
        }

    }

    function CreateExcelFile() {
   
    word = "<html><head><meta charset='UTF-8'></meta></head><body>";
 	word += "<center><b> <font size='12pt' face='Calibri (Cuerpo)'>CONTRATO DE PRESTACION DE SERVICIOS</font></b></center>";
    word += "<br />" + document.getElementById("txtMontoSoles").value;

   	word += "</body></html>";
}


 document.getElementById("btnCalcular").onclick = function () {
	montoSoles = parseInt(document.getElementById("txtMontoSoles").value.toString());
	cuotas = parseInt(document.getElementById("txtCuotas").value.toString());
	montoCuota = montoSoles / cuotas;
	document.getElementById("txtMontoCuotas").value = montoCuota.toString();
}


