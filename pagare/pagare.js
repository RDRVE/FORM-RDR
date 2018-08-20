
	var word = "";
	var montoSoles  = 0;
	var cuotas  = 0;
	var montoCuota  = 0;
  

  document.getElementById("btnCertificado").onclick = function () {
    CreateFileCerficado();
    var blob = new Blob([word], { type: 'application/vnd.ms-word' });
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, "formatoPerson.doc");
    } else {
        this.download = "formatoPersona.doc";
        this.href = window.URL.createObjectURL(blob);
    }
  
  document.getElementById("btnPagare").onclick = function () {
    CreateFilePagare();
    var blob = new Blob([word], { type: 'application/vnd.ms-word' });
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, "formatoPerson.doc");
    } else {
        this.download = "formatoPersona.doc";
        this.href = window.URL.createObjectURL(blob);
    }
  }
  document.getElementById("btnCosa").onclick = function () {
    s();
    var blob = new Blob([word], { type: 'application/vnd.ms-word' });
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, "formatoPerson.doc");
    } else {
        this.download = "formatoPersona.doc";
        this.href = window.URL.createObjectURL(blob);
    }
  } 
  function CreateFileCerficado() {
    word = "<html><head><meta charset='UTF-8'></meta><style type='text/css'>body{margin: 5px; padding: 5px;} </style>";
    word += "";

    word += "</head><body id='cuerpoPagina'style='padding: 3pt; margin: 3pt;'>";

 	  word += "<div style='font-size: 12pt;font-family:Calibri'><center><b> PAGARÉ N°__<u>" 
 		     + document.getElementById("num_contrato")  
 		     +"_______</u></b></center></br></div>";

 	  word += "<div style='font-size: 10pt;font-family:Calibri'><center><b> POR UN VALOR DE (__<u>" 
 		     + document.getElementById("pago_membresia") 
 		     +"</u>____________soles)</b></center></br></div>";

    word += "<div style='font-size: 10pt;font-family:Calibri'><center>(S/.__<u>" 
         + document.getElementById("valorSolesNumero") 
         +"____</u>) ESTE VALOR ES EL SALDO A FINANCIAR</center></br></div>";

   	word += "<div style='font-size: 10pt;margin: 0;padding:0;font-family:Calibri;text-align: justify;'><span> Yo __<u>" 
   		 + document.getElementById("nombres") + " "+document.getElementById("nombres")
   		 + "</u>_______identificado(a) con DNI Nº__<u>"
   		 + document.getElementById("dni")  
   		 +"</u>____________ con domicilio y residencia en __<u>"
       + document.getElementById("direccion ")  
       +"__________________</u> </span></div>";  
   	word += "<div style='font-size: 10pt;margin: 0;padding:0;font-family:Calibri;text-align: justify;'><span> Me comprometo a pagar incondicionalmente a VALLE ENCANTADO S.A.C la suma de __<u>" 
 		  + document.getElementById("montoSolTexto")  
 		  +"</u>__SOLES (S/__<u>" 
 		  + document.getElementById("montoSolNum")  
 		   + "</u>__) pagadero en "
 		  + document.getElementById("cuotas") 
 		  +" cuotas mensuales y consecutivas con vencimiento la primera de ella el día ___<u>"
 		  + document.getElementById("diaPrimerCuota") 
 		  +"</u>____ de __<u>"
 		  + document.getElementById("mesPrimerCuota") 
 		   +"___</u> del __<u>"
 		 + document.getElementById("anioPrimerCuota") 
 		 +"</u>__ , por valor de (S/. __<u>"
 		 + document.getElementById("montoSolesNumero") 
 		 +"</u>__ ). El pago de dichas cuotas se realizará en Soles a razón del cambio oficial vigente a la fecha en que se efectúe éste. En caso de mora y mientras ella subsista pagaré intereses moratorios a la tasa máxima establecida para el periodo correspondiente. De igual manera me obligo a pagar todos los gastos y costos de la cobranza judicial.  </span></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>En el evento en que el deudor no pague en el plazo estipulado una o más cuotas, el tenedor de este título podrá declarar vencidos todos los plazos de esta obligación y pedir su inmediato pago total o el pago del saldo.</span></b></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>También acepto que <b>VALLE ENCANTADO S.A.C</b>, declare de plazo vencido la obligación a la que se refiere este pagaré y exigir su pago total en el evento en que sea perseguido judicialmente. El recibo de abono de parciales no implica novación y cualquier pago que se efectúe se imputará primero a gastos, penalidades, y por último a capital. El suscriptor de este pagaré hace constatar que la obligación de pagarla indivisiblemente y solidariamente subsiste en caso de prórroga o prórrogas o de cualquier modificación a lo estipulado. El deudor declara que la suma que debe conforme a este pagaré, no estará sujeta ni a deducción ni a descuentos de cualquier naturaleza, incluyendo sin limitación cualquier impuesto que pueda gravar su pago, por lo tanto, en caso de existir alguna de estas deducciones o descuentos, el deudor deberá aumentar la suma a pagar de tal manera que el tenedor reciba siempre el valor estipulado del pagaré. El deudor acepta desde ahora el endoso, cesión o transferencia que de este pagaré a VALLE ENCANTADO S.A.C. todos los gastos e impuestos relacionados con la suscripción de este pagaré serán por cuenta del deudor. </span></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>Todos los pagos que deban hacerse según este pagaré serán hechos exclusivamente en Soles, a la <b>Cuenta Recaudadora Soles BCP N°193-2361209-0-94</b>, en su oficina central ubicada en Av. Guardia Civil 1321 oficina 602 – Surquillo o en Ribera del Río Club Resort ubicada en Mz. B Lt. 72. Tercera Etapa - Cieneguilla. </span> </div>";

    word += "<div style='font-family: Calibri ;margin: 0;padding:0;font-size: 10pt;text-align: justify;'><span>Todos los cálculos de intereses se efectuarán sobre la base de un año de trescientos sesenta (360) días, en cada caso por el número de días efectivamente transcurridos (incluyendo el primer día, pero excluyendo el último día) durante el pazo por el cual deban pagarse tale intereses. Si cualquiera de las fechas de pago de principal o intereses antes indicadas coincidiera con un día no hábil, se entenderá que el pago respectivo deberá ser efectuado el día hábil inmediatamente siguiente.</span></div>";

   	word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Cualquier referencia en este pagaré al agente deberá entenderse efectuada a cualquier tenedor del mismo, sea que lo adquiera por endoso o de otro modo.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>En caso de mora, no será necesario requerimiento alguno para que el Cliente incurra en la misma, de acuerdo a lo establecido en el artículo 1333 inciso 1 del Código Civil Peruano. En dicho caso, durante todo el periodo de incumplimiento el cliente pagara a una tasa equivalente al máximo de interés permitido por la ley, por concepto de interés moratorio.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>De conformidad con lo establecido por el artículo 158.2 concordante con el artículo 52° de la Ley de Títulos Valores, este pagaré no requerirá ser protestado por la falta de pago de cualquiera de las cuotas para ejercitar las acciones derivadas del mismo.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Adicionalmente, el cliente se obliga incondicionalmente a pagar al Agente todos los gastos en que éste incurra en razón de su incumplimiento, obligándose a pagar sobre éstos el mismo interés moratorio pactado en este pagaré.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Asimismo, el cliente acepta las renovaciones y prórrogas de vencimiento de este pagaré que el agente considere conveniente efectuar, ya sea por su importe parcial o total, aun cuando no hayan sido comunicadas al cliente. Dichas modificaciones serán anotadas en este mismo instrumento o en hoja anexa, sin que sea necesaria la suscripción de tal instrumento.</b></span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Este pagare se devolverá a su cancelación total. Queda expresamente establecido que el domicilio del cliente es __<u>"
         + document.getElementById("domicilio") 
         + "</u>____ <b>Lima Perú</b>, lugar a donde se dirigirán todas las comunicaciones y notificaciones derivadas de este pagaré. </span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Queda establecido que las obligaciones contenidas en este pagaré, constituyendo el presente acuerdo pacto en contrario a lo dispuesto por el artículo 1233° del Código Civil.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Este pagaré se regirá bajo las leyes de la República del Perú.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Cualquier acción o procedimiento legal relacionado con y derivado del presente pagaré podrá ser iniciado ante los órganos judiciales del Cercado de Lima, Lima, Perú. El cliente renuncia a la jurisdicción de cualquier otro tribunal que pudiere corresponderle por cualquier otra razón.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>En constancia de lo anterior, se firma el presente pagaré el día __<u>"
    + document.getElementById("dia") 
    +"</u>__ de  __<u>"
    + document.getElementById("mes") 
    +"</u>__ del __<u>" 
    + document.getElementById("anio") 
    +"</u>__ en la ciudad de Lima, <br>El Deudor.<br><br></span></div>";
     

    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>_______________________</div>";
    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>FIRMA</div>";
    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>DNI N° __<u>"
         + document.getElementById("dni") 
         +"</u>________</div>";

    
   /* word += " <style type='text/css'>";
    word += "background-color: red;  ";
    word += " </style> ";

    word += " <script type='text/javascript'>";
    word += "document.getElementById('cuerpoPagina').style.background-color = 'red';    ";
    word += "document.getElementById('cuerpoPagina').style.marginTop = '10px' ;  ";
    word += "document.getElementById('cuerpoPagina').style.marginLeft = 10px ; ";
    word += "document.getElementById('cuerpoPagina').style.marginBottom = 10px ;  ";
        word += " </script> ";*/
    word += "</body></html>";
    
}


 document.getElementById("btnCalcular").onclick = function () {
	montoSoles = parseInt(document.getElementById("txtMontoSoles").value.toString());
	cuotas = parseInt(document.getElementById("txtCuotas").value.toString());
	montoCuota = montoSoles / cuotas;
	document.getElementById("txtMontoCuotas").value = montoCuota.toString();
}

