var word = "";
var montoSoles  = 0;
var cuotas  = 0;
var montoCuota  = 0;
 var mestext ;
var dia;
var anio;
var rtp;



var div = document.getElementById("list_eneficiarios");
    div.style.display = "none";




function isEmpty(str) {
    return (!str || 0 === str.length);
}

function fechaFormat(date){
    var format =  new Date(date);


    return ((getDia(format)) + "/" + (getMes(format)) + "/" + format.getFullYear());
}


function getMes(date){
    var format =  new Date(date);

    if ((format.getMonth() + 1) < 10) {
        return "0" + (format.getMonth() + 1).toString();
    }
    return (format.getMonth() + 1);
}
function getAnio(date){
    var format =  new Date(date);
    return (format.getFullYear());
}
function getDia(date){
    
    var f = new Date(date);

    f.setDate(f.getDate() + 1);

    return f.getDate(); 
}

function cambio(){
    if(document.getElementById("radio1").checked == true){ 
       console.log("radio 1");
    }
    else if(document.getElementById("radio2").checked == true){
        console.log("radio 2");
    }
}




document.getElementById('aparecer_ben').onclick = function(){

    if (div.style.display == "block") {
        div.style.display = "none";
    } else if (div.style.display == "none") {
        div.style.display = "block";
    }
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




document.getElementById('btnPrestacionSer').onclick = function() {


    var membresia_clasica = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var membresia_dorada = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var membresia_premium = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


   /*pago por mantenimento*/
    var pago_mantenimiento_monto = document.getElementById('pago_mantenimiento').value;

    var mantenimiento_clasica = "&nbsp;&nbsp;-&nbsp;&nbsp;";
    var mantenimiento_dorada = "&nbsp;&nbsp;-&nbsp;&nbsp;";
    var mantenimiento_premium = "&nbsp;&nbsp;-&nbsp;&nbsp;";





    var select = document.getElementById("estado_civil");
    var miestado_civil = select.options[select.selectedIndex].innerText;


    var mimembresia = document.getElementById("membresia");
    var valor_membresia = mimembresia.options[mimembresia.selectedIndex].value;

    console.log(valor_membresia);


     


    if (valor_membresia == 1) {
        membresia_clasica = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";
        mantenimiento_clasica = "&nbsp;&nbsp;&nbsp;S/." + pago_mantenimiento_monto + "&nbsp;&nbsp;&nbsp;";
    }

    if (valor_membresia == 2) {
        membresia_dorada = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";
        mantenimiento_dorada = "&nbsp;&nbsp;&nbsp;S/." + pago_mantenimiento_monto + "&nbsp;&nbsp;&nbsp;";
    }

    if (valor_membresia == 3) {
        membresia_premium = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";
        mantenimiento_premium = "&nbsp;&nbsp;&nbsp;S/." + pago_mantenimiento_monto + "&nbsp;&nbsp;&nbsp;";
    }




    var opcion_contado = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_3_Cuotas = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_6_Cuotas = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_12_Cuotas = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_18_Cuotas = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_24_Cuotas = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

    var opcion_3_Cuotas_soles = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_6_Cuotas_soles = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_12_Cuotas_soles = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_18_Cuotas_soles = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var opcion_24_Cuotas_soles = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

/*
    var minum_cuotas = document.getElementById("num_cuotas");
    var indice_cuotas = minum_cuotas.options[minum_cuotas.selectedIndex].value;
    */


    var total_sol = parseFloat(document.getElementById('monto_soles').value);
    var cuotas_in_sol = parseFloat(document.getElementById('cuota_inicial').value);


    var array_pagares = new Array();
    var array_pagares_fechas = new Array();
    var array_pagares_cuotas = new Array();
    var array_tasa_anual = new Array();

   


    var mi_num_pagares = document.getElementById('num_pagares');
    var mi_valor_pagares = mi_num_pagares.options[mi_num_pagares.selectedIndex].value;



    if (mi_valor_pagares >= 1) {
        array_pagares[0] = document.getElementById('monto_pagare1').value;
        array_pagares_fechas[0] = document.getElementById('fecha_pagare1').value;
        array_pagares_cuotas[0] = document.getElementById('cuotas_pagare1').value;
        array_tasa_anual[0] = document.getElementById('tasa_anual_pagare1').value;
    }
    if (mi_valor_pagares >= 2) {
        array_pagares[1] = document.getElementById('monto_pagare2').value;
        array_pagares_fechas[1] = document.getElementById('fecha_pagare2').value;
        array_pagares_cuotas[1] = document.getElementById('cuotas_pagare2').value;
        array_tasa_anual[1] = document.getElementById('tasa_anual_pagare2').value;
    }
    if (mi_valor_pagares >= 3) {
        array_pagares[2] = document.getElementById('monto_pagare3').value;
        array_pagares_fechas[2] = document.getElementById('fecha_pagare3').value;
        array_pagares_cuotas[2] = document.getElementById('cuotas_pagare3').value;
        array_tasa_anual[2] = document.getElementById('tasa_anual_pagare3').value;
    }
    if (mi_valor_pagares >= 4) {
        array_pagares[3] = document.getElementById('monto_pagare4').value;
        array_pagares_fechas[3] = document.getElementById('fecha_pagare4').value;
        array_pagares_cuotas[3] = document.getElementById('cuotas_pagare4').value;
        array_tasa_anual[3] = document.getElementById('tasa_anual_pagare4').value;
    }
    if (mi_valor_pagares == 5) {
        array_pagares[4] = document.getElementById('monto_pagare5').value;
        array_pagares_fechas[4] = document.getElementById('fecha_pagare5').value;
        array_pagares_cuotas[4] = document.getElementById('cuotas_pagare5').value;
        array_tasa_anual[4] = document.getElementById('tasa_anual_pagare5').value;
    }


    var indice_cuotas = array_pagares_cuotas[array_pagares_cuotas.length - 1];

    console.log(indice_cuotas);


    if (indice_cuotas == 0) {
        opcion_contado = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";
    }
    if (indice_cuotas == 3) {
        opcion_3_Cuotas = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";

        var cuota_soles = calcularCuotaMensual(array_pagares[array_pagares.length -1],array_tasa_anual[array_tasa_anual.length -1],3).toFixed(2);

        opcion_3_Cuotas_soles = "&nbsp;&nbsp;" + cuota_soles + "&nbsp;&nbsp;";
    }
    if (indice_cuotas == 6) {
        opcion_6_Cuotas = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";

        var cuota_soles = calcularCuotaMensual(array_pagares[array_pagares.length -1],array_tasa_anual[array_tasa_anual.length -1],6).toFixed(2);


        opcion_6_Cuotas_soles = "&nbsp;&nbsp;" + cuota_soles + "&nbsp;&nbsp;";
    }
    if (indice_cuotas == 12) {
        opcion_12_Cuotas = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";

        var cuota_soles = calcularCuotaMensual(array_pagares[array_pagares.length -1],array_tasa_anual[array_tasa_anual.length -1],12).toFixed(2);


        opcion_12_Cuotas_soles = "&nbsp;&nbsp;" + cuota_soles + "&nbsp;&nbsp;";
    }
    if (indice_cuotas == 18) {
        opcion_18_Cuotas = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";

        var cuota_soles = calcularCuotaMensual(array_pagares[array_pagares.length -1],array_tasa_anual[array_tasa_anual.length -1],18).toFixed(2);


        opcion_18_Cuotas_soles = "&nbsp;&nbsp;" + cuota_soles + "&nbsp;&nbsp;";
    }
    if (indice_cuotas == 24) {
        opcion_24_Cuotas = "&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;";

        var cuota_soles = calcularCuotaMensual(array_pagares[array_pagares.length -1],array_tasa_anual[array_tasa_anual.length -1],24).toFixed(2);


        opcion_24_Cuotas_soles = "&nbsp;&nbsp;" + cuota_soles + "&nbsp;&nbsp;";
    }





            
    var ben_nombre1 = isEmpty(document.getElementById('ben_nombre1').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre1').value.toUpperCase();
    var ben_nombre2 = isEmpty(document.getElementById('ben_nombre2').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre2').value.toUpperCase();
    var ben_nombre3 = isEmpty(document.getElementById('ben_nombre3').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre3').value.toUpperCase();
    var ben_nombre4 = isEmpty(document.getElementById('ben_nombre4').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre4').value.toUpperCase();
    var ben_nombre5 = isEmpty(document.getElementById('ben_nombre5').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre5').value.toUpperCase();
    var ben_nombre6 = isEmpty(document.getElementById('ben_nombre6').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre6').value.toUpperCase();
    var ben_nombre7 = isEmpty(document.getElementById('ben_nombre7').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre7').value.toUpperCase();
    var ben_nombre8 = isEmpty(document.getElementById('ben_nombre8').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre8').value.toUpperCase();
    var ben_nombre9 = isEmpty(document.getElementById('ben_nombre9').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre9').value.toUpperCase();
    var ben_nombre10 = isEmpty(document.getElementById('ben_nombre10').value.toUpperCase()) ? '________________' : document.getElementById('ben_nombre10').value.toUpperCase();
   
   
        
    var ben_fecha1 = document.getElementById('ben_fecha1').value != '' ? fechaFormat(document.getElementById('ben_fecha1').value) : ' ___/___/___' ;
    var ben_fecha2 = document.getElementById('ben_fecha2').value != '' ? fechaFormat(document.getElementById('ben_fecha2').value) : ' ___/___/___' ;
    var ben_fecha3 = document.getElementById('ben_fecha3').value != '' ? fechaFormat(document.getElementById('ben_fecha3').value) : ' ___/___/___' ;
    var ben_fecha4 = document.getElementById('ben_fecha4').value != '' ? fechaFormat(document.getElementById('ben_fecha4').value) : ' ___/___/___' ;
    var ben_fecha5 = document.getElementById('ben_fecha5').value != '' ? fechaFormat(document.getElementById('ben_fecha5').value) : ' ___/___/___' ;
    var ben_fecha6 = document.getElementById('ben_fecha6').value != '' ? fechaFormat(document.getElementById('ben_fecha6').value) : ' ___/___/___' ;
    var ben_fecha7 = document.getElementById('ben_fecha7').value != '' ? fechaFormat(document.getElementById('ben_fecha7').value) : ' ___/___/___' ;
    var ben_fecha8 = document.getElementById('ben_fecha8').value != '' ? fechaFormat(document.getElementById('ben_fecha8').value) : ' ___/___/___' ;
    var ben_fecha9 = document.getElementById('ben_fecha9').value != '' ? fechaFormat(document.getElementById('ben_fecha9').value) : ' ___/___/___' ;
    var ben_fecha10 = document.getElementById('ben_fecha10').value != '' ? fechaFormat(document.getElementById('ben_fecha10').value) : ' ___/___/___' ;
   



    var ben_parentesco1 = isEmpty(document.getElementById('ben_parentesco1').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco1').value.toUpperCase();
    var ben_parentesco2 = isEmpty(document.getElementById('ben_parentesco2').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco2').value.toUpperCase();
    var ben_parentesco3 = isEmpty(document.getElementById('ben_parentesco3').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco3').value.toUpperCase();
    var ben_parentesco4 = isEmpty(document.getElementById('ben_parentesco4').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco4').value.toUpperCase();
    var ben_parentesco5 = isEmpty(document.getElementById('ben_parentesco5').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco5').value.toUpperCase();
    var ben_parentesco6 = isEmpty(document.getElementById('ben_parentesco6').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco6').value.toUpperCase();
    var ben_parentesco7 = isEmpty(document.getElementById('ben_parentesco7').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco7').value.toUpperCase();
    var ben_parentesco8 = isEmpty(document.getElementById('ben_parentesco8').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco8').value.toUpperCase();
    var ben_parentesco9 = isEmpty(document.getElementById('ben_parentesco9').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco9').value.toUpperCase();
    var ben_parentesco10 = isEmpty(document.getElementById('ben_parentesco10').value.toUpperCase()) ? '________________' : document.getElementById('ben_parentesco10').value.toUpperCase();
    

    var fecha_fin_data = document.getElementById('fecha_fin').value != '' ? fechaFormat(document.getElementById('fecha_fin').value) : ' ___/___/___' ;







        
    if(document.getElementById("radio1").checked == true){
        
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b>" 
                        + document.getElementById('nombres').value.toUpperCase() + "</b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + " " + getDia(document.getElementById("fecha").value) + "/" 
                        +  getMes(document.getElementById("fecha").value) + "/"  
                        +  getAnio(document.getElementById("fecha").value) +   
                        + " "


                        + " hasta el " + fecha_fin_data


                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 29% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"
                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5. Para las membresías en Preventa, este pago se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, con lo cual el pago se realizara todos los 5 de Enero, para otros casos, se realizara todos los días 5 del mes de aniversario de la membresía, durante todo el plazo del contrato.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        

                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1), no se habilitará el USO, hasta la subsanación del pago ó pagos pendientes.</p>"
                        + "<br /><h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia.</p>"
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales, para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br /><br /><br /><br /><small></small><p></p><br /><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 29 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las </p><br /><p> mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día "
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS' + ".doc");

        
       
    }


    else if(document.getElementById("radio2").checked == true){
        
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b><u >" 
                        + document.getElementById('nombres').value.toUpperCase() + "</u></b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de <u>"
                        + document.getElementById("duracion").value + "</u> año(s), iniciando el "


                        + getDia(document.getElementById("fecha").value) + "/" 
                        +  getMes(document.getElementById("fecha").value) + "/"  
                        +  getAnio(document.getElementById("fecha").value)

                        + " hasta el " +  fecha_fin_data

                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"


                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a "
      /*cambio*/        + "lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 22% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"

                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5. Para las membresías en Preventa, este pago se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, con lo cual el pago se realizara todos los 5 de Enero, para otros casos, se realizara todos los días 5 del mes de aniversario de la membresía, durante todo el plazo del contrato.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        



                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        



                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1), no se habilitará el USO, hasta la subsanación del pago ó pagos pendientes.</p>"
                        + "<br /><h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia.</p>"
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales, para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br /><br /><br /><br /><small></small><p></p><br /><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una" 
                        + "comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios"
                        + "siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con" 
     /*cambio*/         + "lo cual acepta pagar el 22 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las </p><br /><p> mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día "
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS' + ".doc");

        
        
       console.log("radio 2");
    }
    else if(document.getElementById("radio3").checked == true){
        
        /*mensual del 20 %*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b><u >" 
                        + document.getElementById('nombres').value.toUpperCase() + "</u></b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + getDia(document.getElementById("fecha").value) + "/"
                        + getMes(document.getElementById("fecha").value) + "/"
                        + getAnio(document.getElementById("fecha").value) + ""
                        + " hasta el " +  fecha_fin_data
                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " Soles</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"

                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 22% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"

                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5 de cada mes. Y se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, para el caso de preventa, y al mes siguiente del que fue realizada la afiliación para los demás casos.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<br><div class='dat'> a)  Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>b)  Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>c)  No se habilitará el USO, hasta la subsanación del pago de todas las mensualidades pendientes.</div>"


                        + "<h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia. </p>"
                        
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<br><br><br><small>&nbsp;</small><p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        
                        + "<p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 22 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<br><small>&nbsp;</small><h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"

                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                       
                       + "<b><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></b>"
                        + "<p ><font style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".<b></font></p>"
                        + "<br/><br/>"
                        + "<p>______________________________________&#09;  &#09;&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;&#09;  &#09;  DIRECTOR <br />Nombres y Apellidos:<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS_MENSUAL' + ".doc");

        }

        else if(document.getElementById("radio4").checked == true){
        /* ANUAL con el 50 %*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b>" 
                        + document.getElementById('nombres').value.toUpperCase() + "</b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + getDia(document.getElementById("fecha").value) + "/" 
                        +  getMes(document.getElementById("fecha").value) + "/"  
                        +  getAnio(document.getElementById("fecha").value) +


                        + " hasta el " + fecha_fin_data


                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 38% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"
                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5. Para las membresías en Preventa, este pago se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, con lo cual el pago se realizara todos los 5 de Enero, para otros casos, se realizara todos los días 5 del mes de aniversario de la membresía, durante todo el plazo del contrato.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        

                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1), no se habilitará el USO, hasta la subsanación del pago ó pagos pendientes.</p>"
                        
                        + "<br><h4><u>SEXTO: Renovación.</u></h4>"
                        
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia.</p>"
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales, para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br /><br /><br /><br /><small></small><p></p><br /><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 38 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las </p><br /><p> mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</b></p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS' + ".doc");

        
    }else  if(document.getElementById("radio5").checked == true){
        /*con el 100%*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b>" 
                        + document.getElementById('nombres').value.toUpperCase() + "</b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + getDia(document.getElementById("fecha").value) + "/" 
                        +  getMes(document.getElementById("fecha").value) + "/"  
                        +  getAnio(document.getElementById("fecha").value) 
                        + " hasta el " + fecha_fin_data


                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 51% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"
                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5. Para las membresías en Preventa, este pago se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, con lo cual el pago se realizara todos los 5 de Enero, para otros casos, se realizara todos los días 5 del mes de aniversario de la membresía, durante todo el plazo del contrato.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        

                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1), no se habilitará el USO, hasta la subsanación del pago ó pagos pendientes.</p>"
                        + "<br /><h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia.</p>"
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales, para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br /><br /><br /><br /><small></small><p></p><br /><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 51 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las </p><br /><p> mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</b></p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS' + ".doc");

        
       console.log("radio 5");

    }else if(document.getElementById("radio6").checked == true){
        /*mensual 30 %*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b><u >" 
                        + document.getElementById('nombres').value.toUpperCase() + "</u></b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                         + getDia(document.getElementById("fecha").value) + "/"
                        + getMes(document.getElementById("fecha").value) + "/"
                        + getAnio(document.getElementById("fecha").value)
                        + " hasta el " +  fecha_fin_data
                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 29% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"

                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5 de cada mes. Y se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, para el caso de preventa, y al mes siguiente del que fue realizada la afiliación para los demás casos.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<br><div class='dat'> a)  Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>b)  Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>c)  No se habilitará el USO, hasta la subsanación del pago de todas las mensualidades pendientes.</div>"


                        + "<h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia. </p>"
                        
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br><small></small><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 29 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las </p><br /><p> mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</b></p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:5px;font-size: 11pt;} .datos{margin-bottom:5px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS_MENSUAL' + ".doc");

    }else if(document.getElementById("radio7").checked == true){
        /*mensual 50 %*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b><u >" 
                        + document.getElementById('nombres').value.toUpperCase() + "</u></b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + getDia(document.getElementById("fecha").value) + "/"
                        + getMes(document.getElementById("fecha").value) + "/"
                        + getAnio(document.getElementById("fecha").value)
                        + " hasta el " +  fecha_fin_data
                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br />"
                        + "<small>&nbsp;</small>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 38% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"

                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5 de cada mes. Y se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, para el caso de preventa, y al mes siguiente del que fue realizada la afiliación para los demás casos.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<br /><div class='dat'> a)  Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>b)  Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>c)  No se habilitará el USO, hasta la subsanación del pago de todas las mensualidades pendientes.</div>"


                        + "<h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        + "<p style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</p>"
                        + "<p style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</p>"
                        + "<p style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia. </p>"
                        
                        + "<p style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</p>"
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<p>&nbsp;</p><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 38 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<br><h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: ____________________<br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS_MENSUAL' + ".doc");

        }else if(document.getElementById("radio8").checked == true){
        /*mensual 100 %*/
         var static = {
                mhtml: {
                    top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: "
                     + location.href + "\n\n<!DOCTYPE html>\n<html " 
                     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
                     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
                     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
                     + " xmlns='http://www.w3.org/TR/REC-html40' >\n_html_</html>",
                    head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">"
                        + " <link rel=File-List href='word_archivos/filelist.xml'>"
                        + " <link rel=Edit-Time-Data href='word_archivos/editdata.mso'>"
                        + " <link rel=themeData href='word_archivos/themedata.thmx'>"
                        + " <link rel=colorSchemeMapping href='word_archivos/colorschememapping.xml'>" 
                        + "\n<style>\n_styles_\n</style>\n</head>\n",
                    body: "<body lang=EN-US style='tab-interval:35.4pt' >"
                        + "<div class=WordSection1></div>" 
                        + "<br />"
                        + "<div style='font-size: 14pt;'><center><b> CONTRATO DE PRESTACION DE SERVICIOS MENSUAL</b></center></div>"
                        + "<div align='right' style='font-size: 12pt;'>Número: <u>&nbsp;&nbsp;" 
                        + document.getElementById('num_contrato').value.toUpperCase()  + " &nbsp;&nbsp;</u></div>"
                        + "<p><font size='11pt'>Valle Encantado S.A.C. con RUC 20601460271, ubicado en Mz. “B” Lote 72, tercera Etapa Cieneguilla, en adelante se denominará <b>“EL PRESTADOR”</b> o <b>“Ribera del Río Club Resort”</b> indistintamente, y por la otra parte:</font></p>"
                        + "<div class='dat'>" + "Nombres y Apellidos: <b><u >" 
                        + document.getElementById('nombres').value.toUpperCase() + "</u></b></div>"
                        + "<div class='datos'>" + "DNI: <b>&nbsp;" 
                        + document.getElementById('dni').value + "</b>&#09; Estado Civil: <b>&nbsp;" 
                        + miestado_civil.toUpperCase() + "</b></div>"
                        + "<div class='datos'>Domicilio: <b >&nbsp;" 
                        + document.getElementById('domicilio').value.toUpperCase() + "</b ></div>"
                        + "<div class='datos'>Distrito: <b>&nbsp;" 
                        + document.getElementById('distrito').value.toUpperCase() + "</b></div>"
                        + "<p> A quien en adelante se le denominará “EL AFILIADO”.</p>"
                        + "<p>El presente contrato de prestación de servicios, se celebra bajo los siguientes términos y condiciones:</p>"
                        + "<div style='font-size: 11pt;'><b><u>PRIMERO: Objeto.</u></b></div>"
                        + "<p>En virtud del presente contrato, EL PRESTADOR suministra a EL AFILIADO, los servicios de Ribera del Río Club Resort, con sujeción al “Reglamento General de Servicios” " 
                        + "y a los reglamentos específicos establecidos para las distintas actividades en los términos y condiciones del tipo de membresía seleccionada, entre otros que resulten aplicables.</p>"
                        + "Membresía:&#09; Clásica " + "&nbsp;&nbsp;<u>" + membresia_clasica +"</u>&#09;Dorada &nbsp;&nbsp;<u>" + membresia_dorada + "</u>&#09; Premiun &nbsp;&nbsp;<u>" + membresia_premium + "</u><br/><br/>"
                        + "<div style='font-size: 11pt;'><b><u>SEGUNDO: Duración.</u></b></div>"
                        + "<p style='text-align:justify;'>El presente contrato tendrá una duración de _<u>"
                        + document.getElementById("duracion").value + "</u>_ año(s), iniciando el "
                        + getDia(document.getElementById("fecha").value) + "/"
                        + getMes(document.getElementById("fecha").value) + "/"
                        + getAnio(document.getElementById("fecha").value)
                        + " hasta el " +  fecha_fin_data
                        + ", fecha pactada con EL AFILIADO, Ribera del Río Club Resort, no se hace responsable por el tiempo que EL AFILIADO no haga uso del Club y sus beneficios, durante la vigencia de la Membresía.</p>"
                        + "<div style='font-size: 11pt;'><b><u>TERCERO: Valor y Forma de Pago.</u></b></div>"

                        + "<p style='text-align:justify;'>EL AFILIADO se obliga a realizar el pago de la membresía escogida al momento de suscribirse al presente contrato, por un valor de "
                        + " <b>" 
                        + NumerosaLetras(document.getElementById("monto_dolares").value)
                        + " &nbsp;DOLARES</b> ($<u>" 
                        + parseFloat(document.getElementById('monto_dolares').value).toFixed(2) 
                        + "</u>) los cuales al tipo de cambio del día <u>" 
                        + document.getElementById('tipo_cambio').value + "</u>, serian <b>" 
                        + NumerosaLetras(document.getElementById("monto_soles").value) 
                        + " SOLES</b> (S/. "
                        + " <u>" 
                        + parseFloat(document.getElementById('monto_soles').value).toFixed(2) 
                        + "</u>). Este pago le confiere el derecho al uso de las instalaciones de Ribera del Río Club Resort bajo los términos y condiciones establecidas en el presente documento.</p>" 
                        + "<h4><u>CUARTO: Financiamiento.</u></h4>"
                        + "<p style='text-align:justify;'>El AFILIADO podrá realizar el financiamiento por un máximo del <u>&nbsp;" 
                        + document.getElementById('max_financiamiento_porcentaje').value 
                        + "&nbsp;</u> %   del valor de su membresía:</p>"
                        + "<div class='dat'><u>" + opcion_contado + "</u> Al Contado &#09;&#09;&#09;&#09; <u>" + opcion_12_Cuotas + "</u> 12 Cuotas - Cada cuota de  (S/.<u>" + opcion_12_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_3_Cuotas + "</u> 3 Cuotas - Cada cuota de    (S/.<u>" + opcion_3_Cuotas_soles + "</u>)  &#09;<u>" + opcion_18_Cuotas +"</u> 18 Cuotas - Cada cuota de  (S/.<u>" + opcion_18_Cuotas_soles + "</u>)</div>"
                        + "<div class='datos'><u>" + opcion_6_Cuotas +"</u> 6 Cuotas - Cada cuota de    (S/.<u>" + opcion_6_Cuotas_soles +"</u>) &#09; <u>" + opcion_24_Cuotas +"</u> 24 Cuotas - Cada cuota de  (S/.<u>" + opcion_24_Cuotas_soles +"</u>)</div>"
                        + "<br/><br/><br/><br/><br /><br>"
                        + "<br><br>"
                        + "<div style='font-size:14pt;text-align:justify;'><b>&#09;-  Cuenta Corriente Soles BCP - Cuota Inicial      &#09; &#09;192-2459697-0-22"
                        + "<br/>&#09;-  Cuenta Recaudadora Soles BCP             &#09; &#09;&#09;&#09;193-2361209-0-94  "
                        + "<br/>&#09;(Financiamiento y Mantenimiento) - Credipago.</b></div>"
                        + "<p>En el caso de incumplimiento del cronograma de pagos, EL AFILIADO, tendrá las siguientes alternativas:</p>"
                        + "<p>1.- Solicitar periodo de gracias por 3 meses.</p>"
                        + "<p>2.- Realizar un traspaso de la membresía a un Tercero.</p>"
                        
                        + "<p style='text-align:justify;'>3.- Aplicar a liquidación, en el cual se descontará a lo pagado a la fecha, los gastos de ventas y administrativos (equivalentes a 51% del valor total de la membresía). Esta Liquidación se ejecutará, después de la fecha de entrega del proyecto. (indicada en la Clausula Segunda) EL AFILIADO, autoriza al PRESTADOR el endoso de la gestión de cobranza a alguna institución bancaria y/o financiera en caso exista algún saldo de financiamiento directo en Ribera del Rio Club Resort por la adquisición de la membresía.</p>"
                        
                        + "<p>Otro si:</p>"
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del financiamiento, según fechas estipuladas en el cronograma se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<div class='dat'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a) Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) Atraso de TRES (3) CUOTAS MENSUALES, se procederá a la disolución del presente contrato y aplicar a Liquidación.</div>"
                        + "<h4><u>QUINTO: Mantenimiento.</u></h4>"

                        + "<p style='text-align:justify;'>5.1. EL AFILIADO, acepta y confirma que está informado del pago mensual, por concepto de mantenimiento, el mismo que podrá variar, según lo determine y justifique la administración (incremento costo vida, inflación, valor dinero en el tiempo).</p>"
                        + "<p style='text-align:justify;'>5.2. La fecha de vencimiento del pago del mantenimiento es los días 5 de cada mes. Y se inicia a la entrega del desarrollo según CLAUSULA SEGUNDA, para el caso de preventa, y al mes siguiente del que fue realizada la afiliación para los demás casos.</p>"
                        + "<p style='text-align:justify;'>5.3. El no uso de los servicios de Ribera del Río Club Resort no exonera de este pago al titular. En caso de incumplimiento, EL AFILIADO quedará inhabilitado temporalmente hasta regularizar el pago.</p>"
                        + "<p style='text-align:justify;'>5.4. Esta operación no requiere estado de cuenta previo para su cancelación. Puede ser abonado en la cuenta corriente del Banco BCP identificándose con su número de afiliado y/o pago directo en alguna oficina del Club.</p>"
                        + "<p style='text-align:justify;'>5.5. El pago por concepto de mantenimiento varía en función al tipo de membresía elegida:</p>"
                        

                        + "<center>Clásica " + "&nbsp;&nbsp;<u>" + mantenimiento_clasica + "</u>&#09;Dorada &nbsp;&nbsp;<u>" + mantenimiento_dorada +"</u>&#09; Premiun &nbsp;&nbsp;<u>" + mantenimiento_premium + "</u></center>"
                        
                        + "<p style='text-align:justify;'>En caso de incumplimiento de pago de las cuotas del mantenimiento, se procederá a la suspensión de los beneficios (según Plan de Beneficios – ANEXO 1) como sigue:</p>"
                        + "<br><div class='dat'> a)  Atraso de UNA (1) CUOTA MENSUAL, se procederá a la suspensión de los beneficios de descuentos.</div>"
                        + "<div class='datos'>b)  Atraso de DOS (2) CUOTAS MENSUALES, se procederá a la suspensión de los beneficios de Club y Alojamiento.</div>"
                        + "<div class='datos'>c)  No se habilitará el USO, hasta la subsanación del pago de todas las mensualidades pendientes.</div>"


                        + "<h4><u>SEXTO: Renovación.</u></h4>"
                        + "<p style='text-align:justify;'>EL PRESTADOR asegura disponibilidad de membresía para renovaciones. Teniendo en consideración las siguientes condiciones:</p>"
                        
                        + "<div class='dato' style='text-align:justify;'>6.1. El Precio de la renovación será equivalente al <u>&nbsp;" 
                        + document.getElementById('renovacion_procentaje').value + "&nbsp;</u> % del precio vigente a la fecha de renovación.</div>"
                        + "<div class='datos' style='text-align:justify;'>6.2. EL AFILIADO al optar por la renovación, acepta las condiciones y normas vigentes a dicha fecha.</div>"
                        + "<div class='datos' style='text-align:justify;'>6.3. A los 30 años de AFILIADO, este pasará a la modalidad de Vitalicio. Esta modalidad no genera herencia. </div>"
                        
                        + "<div class='datos' style='text-align:justify;'>6.4. El número de membresías será determinado en función a la ocupabilidad, poniendo el Resort a disposición de sus AFILIADOS el 25% de su capacidad instalada anual.</div>"
                        
                        + "<h4><u>SETIMO: Derechos del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>7.1. Identificación. A las 48 horas de realizado el pago de la cuota de ingreso, se actualizará en sistema el núcleo familiar del AFILIADO. Los cuales para poder hacer uso y beneficio de la membresía, sólo deberán mostrar su Documento de Identidad (DNI, Carnet de Extranjería).</p>"
                        + "<p  style='text-align:justify;'>7.2. Kit de Bienvenida. Cada AFILIADO, después de formalizar su sistema de pago, recibe el Kit en un plazo de 15 días útiles. El Kit incluye: Carta de Bienvenida donde se consigna su número de afiliado, Cronograma de Pagos (caso hubiese fraccionamiento), Estatutos y Reglamentos de Ribera del Río Club Resort. Este Kit de Bienvenida únicamente será entregado en alguna de nuestras oficinas previa coordinación con el titular o vía correo electrónico según prefiera EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.3. Uso de áreas deportivas y juegos de mesa. LOS AFILIADOS, dejando previamente su DNI o algún Documento de Identidad, disponen del uso gratuito de los servicios de entretenimiento deportivo y juegos de mesa, no incluye concesiones. Todos estos activos están sujetos a disponibilidad, horarios y buen estado.</p>"
                        + "<p  style='text-align:justify;'>7.4. Descuentos y Beneficios. EL AFILIADO cuenta con diversos beneficios y descuentos en los servicios, que presta Ribera del Río Club Resort, los mismos que se encuentran especificados en el Anexo: “Plan de Beneficios”.</p>"
                        + "<p  style='text-align:justify;'>7.5. Invitados.</p>"
                        + "<p  style='text-align:justify;'>7.5.1. Según el tipo de membresía adquirida, cada AFILIADO tiene derecho a un número de invitados mensuales (ver detalle en Plan de Beneficios).</p>"
                        + "<p  style='text-align:justify;'>7.5.2. Los invitados adicionales deberán pagar por su ingreso según tarifario vigente. En el caso de eventos y reservas, la cantidad de invitados puede variar de acuerdo a las condiciones convenidas con EL AFILIADO.</p>"
                        + "<p  style='text-align:justify;'>7.5.3 Se aplicarán restricciones en fines de semana largos y/o feriados.</p>"
                        + "<p  style='text-align:justify;'>7.6. Beneficiarios. Todos los AFLIADOS tendrán derecho a adicionar hasta 3 personas el núcleo familiar y/o Beneficiarios directos. Realizando el pago correspondiente según lo indique cada tipo de membresía. Este pago está especificado en el anexo: “Plan de Beneficios”.</p>"
                        + "<br><p>&nbsp;</p><p  style='text-align:justify;'>7.7. Incumplimiento Pacto Entrega. Todos los AFILIADOS tendrán derecho a una vez cumplido el plazo de entrega del proyecto (02/01/2021), si este no fuese entregado conforme, poder reclamar el 100% de sus aportes, y dejar sin efecto este contrato. Ribera del Río Club Resort, se compromete a poner a su disposición esta cantidad en cheque bancario. Sólo aplica para los AFILIADOS, que hayan cancelado el 100% del monto de su membresía. Los Afiliados que no hayan cancelado la totalidad se aplicara según Clausula CUARTA.</p>"
                        + "<h4><u>OCTAVO: Obligaciones del Usuario.</u></h4>"
                        + "<p style='text-align:justify;'>8.1. EL AFILIADO declara responsabilizarse por los daños que éste, su cónyuge, hijos, hijas e invitados pudieran causar a las instalaciones de Ribera del Río Club Resort ya sea por dolo, culpa leve o culpa inexcusable.</p>"
                        + "<p style='text-align:justify;'>8.2. EL AFILIADO reconoce que Ribera del Río Club Resort a través de su administración podrá imponer a los afiliados las sanciones que constan en el Reglamento de Ribera del Río Club Resort.</p>"
                        + "<p style='text-align:justify;'>8.3. EL AFILIADO declara conocer las disposiciones contenidas en el Reglamento de Ribera del Río Club Resort y que lo ha leído previamente a la suscripción del presente documento, sin más constancia que la firma puesta al pie, quedando suscrito a sus términos y condiciones aceptando los procedimientos y sanciones que éste contempla.</p>"
                        + "<p style='text-align:justify;'>8.4. EL AFILIADO declara y acepta que Ribera del Río Club Resort podrá modificar su Reglamento, así como podrá expedir otras normas, reglamentos y políticas que tengan por finalidad mejorar el uso de las instalaciones de Ribera del Río Club Resort por parte de los afiliados y público en general, los cuales están obligados a respetarlas desde la fecha en que estas sean comunicadas.</p>"
                        
                        + "<h4><u>NOVENO: Terminación.</u></h4>"
                        + "<p style='text-align:justify;'>Este contrato queda resuelto de manera automática una vez finalizado el periodo de la membresía contratado. En caso de incumplimiento de cualquier obligación del presente contrato y del Reglamento por parte de EL AFILIADO, Ribera del Río Club Resort podrá resolverlo de manera automática y sin lugar a devolución de dinero.</p>"
                        + "<h4><u>DECIMO: Cesión.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO puede ceder, transferir o donar, parcial o totalmente cualquier servicio y/u obligaciones bajo este contrato, con el solo llenado de los formatos correspondientes.</p>"
                        
                        + "<h4><u>DECIMO PRIMERO: Resolución Unilateral.</u></h4>"
                        
                        + "<p style='text-align:justify;'>Podrán resolver unilateralmente el contrato, mediante una comunicación por escrito y bajo cargo de entrega, dentro de los cinco (5) días calendarios siguiente suscrito el contrato; para lo cual no es necesaria una expresión de causa, con lo cual acepta pagar el 51 % del valor total de la membresía adquirida (correspondiente a los gastos de ventas y administrativos al igual como se indica en la clausula cuarta en caso de financiamiento), por concepto de penalidad, devolviéndose el saldo en el caso que lo hubiera, en un plazo no menor de 45 días ni mayor de 60 días, sin que se genere ningún tipo de interés compensatorio o moratorio ni de cualquier tipo. La devolución total procederá en el caso que la autoridad competente disponga en los plazos indicados previa demostración objetiva y fehaciente por parte de EL AFILIADO según lo previsto en el articulo N° 59 de la ley N°29571.</p>"
                        + ""
                        + "<h4><u>DECIMO SEGUNDO: Normas Adicionales.</u></h4>"
                        + "<p style='text-align:justify;'>Ribera del Río Club Resort, se reserva el derecho a modificar, adicionar y/o complementar normas. Todas estas modificaciones adicionales y demás estarán en vigor al día siguiente de su publicación. El incumplimiento de las  mismas dará lugar a la cancelación de los derechos de EL AFILIADO, como también en los casos en que comportamiento sea considerado molesto, perturbador, inmoral o fraudulento, sin derecho a devolución del monto pagado.</p>"
                        + "<br /><br /><h4><u>DECIMO TERCERO: Beneficiarios.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, tiene la posibilidad de cambiar a sus beneficiarios de manera anual, con el solo llenado de los formatos correspondientes.</p>"
                        + "<h4>Directos </h4>"
                        + "<div class='dat' style='text-align:justify;'>Nombre:  <b>" + ben_nombre1 + "</b> Fecha de Nacimiento: &nbsp;<b> " + ben_fecha1 + " </b>&nbsp; Grado de Parentesco: " + ben_parentesco1 + "</div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre2 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha2 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco2 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre3 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha3 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco3 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre4 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha4 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco4 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>:" + ben_nombre5 + " </b>Fecha de Nacimiento: <b>" + ben_fecha5 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco5 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre:<b> " + ben_nombre6 + "</b>Fecha de Nacimiento: &nbsp;<b>" + ben_fecha6 + "</b>&nbsp; Grado de Parentesco:<b>" + ben_parentesco6 + "</b></div>"
                        + "<h4>Adicionales</h4>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre7 + "</b>Fecha de Nacimiento: <b>" + ben_fecha7 + "</b> Grado de Parentesco:<b>" + ben_parentesco7 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre8 + "</b>Fecha de Nacimiento: <b>" + ben_fecha8 + "</b> Grado de Parentesco:<b>" + ben_parentesco8 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre9 + "</b>Fecha de Nacimiento: <b>" + ben_fecha9 + "</b> Grado de Parentesco:<b>" + ben_parentesco9 + "</b></div>"
                        + "<div class='datos' style='text-align:justify;'>Nombre <b>: " + ben_nombre10 + "</b>Fecha de Nacimiento: <b>" + ben_fecha10 + "</b> Grado de Parentesco:<b>" + ben_parentesco10 + "</b></div>"
                        + "<h4><u>DECIMO CUARTO: Manejo de datos Personales.</u></h4>"
                        + "<p style='text-align:justify;'>EL AFILIADO, autoriza a Ribera del Río Club Resort, el uso de los datos consignados en el presente contrato para fines de comunicación y promoción de los productos y servicios que éste ofrece.</p>"
                        + "<h4><u>DECIMO QUINTO: Estipulaciones Anteriores.</u></h4>"
                        + "<p style='text-align:justify;'>Las partes contratantes manifiestan que el presente contrato constituye un acuerdo completo y total acerca de su objeto y reemplaza cualquier otro acuerdo verbal o escrito celebrado con anterioridad.</p>"
                        + "<p style='text-align:justify;'>Para constancia se firma en dos (2) ejemplares del mismo tenor, el día <b>"
                        + dateLarge(document.getElementById('fecha_actual').value) + ".</p>"
                        + "<br/><br/><br/>"
                        + "<p>______________________________________&#09;  &#09;_____________________________</p>"
                        + "<div>EL AFILIADO &#09;&#09;&#09;&#09;&#09; &#09;  DIRECTOR <br />Nombres y Apellidos: <br />" + document.getElementById('nombres').value.toUpperCase() + "</div>"
                        + ""



                        + "_body_</body>"
                }
            };
            var options = {
                maxWidth: 624
            };
            // Clone selected element before manipulating it
            var markup = $(this).clone();

            // Remove hidden elements from the output
            markup.each(function() {
                var self = $(this);
                if (self.is(':hidden'))
                    self.remove();
            });

            // Embed all images using Data URLs
            var images = Array();
            var img = markup.find('img');
            for (var i = 0; i < img.length; i++) {
                // Calculate dimensions of output image
                var w = Math.min(img[i].width, options.maxWidth);
                var h = img[i].height * (w / img[i].width);
                // Create canvas for converting image to data URL
                var canvas = document.createElement("CANVAS");
                canvas.width = w;
                canvas.height = h;
                // Draw image to canvas
                var context = canvas.getContext('2d');
                context.drawImage(img[i], 0, 0, w, h);
                // Get data URL encoding of image
                var uri = canvas.toDataURL("image/png");
                $(img[i]).attr("src", img[i].src);
                img[i].width = w;
                img[i].height = h;
                // Save encoded image to array
                images[i] = {
                    type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
                    encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
                    location: $(img[i]).attr("src"),
                    data: uri.substring(uri.indexOf(",") + 1)
                };
            }

            // Prepare bottom of mhtml file with image data
            var mhtmlBottom = "\n";
            for (var i = 0; i < images.length; i++) {
                mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
                mhtmlBottom += "Content-Location: " + images[i].location + "\n";
                mhtmlBottom += "Content-Type: " + images[i].type + "\n";
                mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
                mhtmlBottom += images[i].data + "\n\n";
            }
            mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

            //TODO: load css from included stylesheet
            var styles = "  @font-face"
               + "   {font-family:Wingdings;"
               + "   panose-1:5 0 0 0 0 0 0 0 0 0;"
               + "   mso-font-charset:2;"
               + "   mso-generic-font-family:auto;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 268435456 0 0 -2147483648 0;}"
               + " @font-face"
               + "   {font-family:'Cambria Math';"
               + "   panose-1:2 4 5 3 5 4 6 3 2 4;"
               + "   mso-font-charset:1;"
               + "   mso-generic-font-family:roman;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:0 0 0 0 0 0;}"
               + " @font-face"
               + "   {font-family:Calibri;"
               + "   panose-1:2 15 5 2 2 2 4 3 2 4;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:-536859905 -1073732485 9 0 511 0;}"
               + " @font-face"
               + "   {font-family:'Segoe UI';"
               + "   panose-1:2 11 5 2 4 2 4 2 2 3;"
               + "   mso-font-charset:0;"
               + "   mso-generic-font-family:swiss;"
               + "   mso-font-pitch:variable;"
               + "   mso-font-signature:3 0 0 0 1 0;}"
               + "  /* Style Definitions */"
               + "  p.MsoNormal, li.MsoNormal, div.MsoNormal"
               + "   {mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-parent:'';"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:0cm;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoHeader, li.MsoHeader, div.MsoHeader"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Encabezado Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoFooter, li.MsoFooter, div.MsoFooter"
               + "   {mso-style-priority:99;"
               + "   mso-style-link:'Pie de página Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   tab-stops:center 225.65pt right 451.3pt;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoAcetate, li.MsoAcetate, div.MsoAcetate"
               + "   {mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-link:'Texto de globo Car';"
               + "   margin:0cm;"
               + "   margin-bottom:.0001pt;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Segoe UI';"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:0cm;"
               + "   margin-left:36.0pt;"
               + "   margin-bottom:.0001pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast"
               + "   {mso-style-priority:34;"
               + "   mso-style-unhide:no;"
               + "   mso-style-qformat:yes;"
               + "   mso-style-type:export-only;"
               + "   margin-top:0cm;"
               + "   margin-right:0cm;"
               + "   margin-bottom:8.0pt;"
               + "   margin-left:36.0pt;"
               + "   mso-add-space:auto;"
               + "   line-height:107%;"
               + "   mso-pagination:widow-orphan;"
               + "   font-size:11.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " span.EncabezadoCar"
               + "   {mso-style-name:'Encabezado Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:Encabezado;}"
               + " span.PiedepginaCar"
               + "   {mso-style-name:'Pie de página Car';"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Pie de página';}"
               + " span.TextodegloboCar"
               + "   {mso-style-name:'Texto de globo Car';"
               + "   mso-style-noshow:yes;"
               + "   mso-style-priority:99;"
               + "   mso-style-unhide:no;"
               + "   mso-style-locked:yes;"
               + "   mso-style-link:'Texto de globo';"
               + "   mso-ansi-font-size:9.0pt;"
               + "   mso-bidi-font-size:9.0pt;"
               + "   font-family:'Segoe UI',sans-serif;"
               + "   mso-ascii-font-family:'Segoe UI';"
               + "   mso-hansi-font-family:'Segoe UI';"
               + "   mso-bidi-font-family:'Segoe UI';}"
               + " .MsoChpDefault"
               + "   {mso-style-type:export-only;"
               + "   mso-default-props:yes;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;"
               + "   mso-ansi-language:ES-PE;}"
               + " .MsoPapDefault"
               + "   {mso-style-type:export-only;"
               + "   margin-bottom:8.0pt;"
               + "   line-height:107%;}"
               + "  /* Page Definitions */"
               + "  @page"
               + "   {mso-footnote-separator:url('word_archivos/header.htm') fs;"
               + "   mso-footnote-continuation-separator:url('word_archivos/header.htm') fcs;"
               + "   mso-endnote-separator:url('word_archivos/header.htm') es;"
               + "   mso-endnote-continuation-separator:url('word_archivos/header.htm') ecs;}"
               + " @page WordSection1"
               + "   {size:595.3pt 841.9pt;"
               + "   margin:36.0pt 36.0pt 21.3pt 36.0pt;"
               + "   mso-header-margin:14.2pt;"
               + "   mso-footer-margin:6.9pt;"
               + "   mso-even-header:url('word_archivos/header.htm') eh1;"
               + "   mso-header:url('word_archivos/header.htm') h1;"
               + "   mso-footer:url('word_archivos/header.htm') f1;"
               + "   mso-first-header:url('word_archivos/header.htm') fh1;"
               + "   mso-paper-source:0;}"
               + " div.WordSection1"
               + "   {page:WordSection1;}"
               + "  /* List Definitions */"
               + "  @list l0"
               + "   {mso-list-id:764613839;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:-1714497338 2024294848 671744003 671744005 671744001 671744003 671744005 671744001 671744003 671744005;}"
               + " @list l0:level1"
               + "   {mso-level-start-at:7;"
               + "   mso-level-number-format:bullet;"
               + "   mso-level-text:-;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Calibri',sans-serif;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;}"
               + " @list l0:level2"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level3"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level4"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level5"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level6"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l0:level7"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0B7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Symbol;}"
               + " @list l0:level8"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:o;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:'Courier New';}"
               + " @list l0:level9"
               + "   {mso-level-number-format:bullet;"
               + "   mso-level-text:\F0A7;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   font-family:Wingdings;}"
               + " @list l1"
               + "   {mso-list-id:812065131;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l1:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l1:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l1:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l1:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2"
               + "   {mso-list-id:1920359361;"
               + "   mso-list-type:hybrid;"
               + "   mso-list-template-ids:2083269992 1208379228 671744025 671744027 671744015 671744025 671744027 671744015 671744025 671744027;}"
               + " @list l2:level1"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-text:'%1\)';"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;"
               + "   mso-ascii-font-family:Calibri;"
               + "   mso-ascii-theme-font:minor-latin;"
               + "   mso-fareast-font-family:Calibri;"
               + "   mso-fareast-theme-font:minor-latin;"
               + "   mso-hansi-font-family:Calibri;"
               + "   mso-hansi-theme-font:minor-latin;"
               + "   mso-bidi-font-family:'Times New Roman';"
               + "   mso-bidi-theme-font:minor-bidi;}"
               + " @list l2:level2"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level3"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level4"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level5"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level6"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " @list l2:level7"
               + "   {mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level8"
               + "   {mso-level-number-format:alpha-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:left;"
               + "   text-indent:-18.0pt;}"
               + " @list l2:level9"
               + "   {mso-level-number-format:roman-lower;"
               + "   mso-level-tab-stop:none;"
               + "   mso-level-number-position:right;"
               + "   text-indent:-9.0pt;}"
               + " ol"
               + "   {margin-bottom:0cm;}"
               + " ul"
               + "   {margin-bottom:0cm;}"
               + " p{text-align: justify;font-size: 11pt;}"
               + " body{font-family: 'Calibri';} "
               + " .dat{margin-top:7px;margin-bottom:7px;font-size: 11pt;} .datos{margin-bottom:7px;font-size: 11pt;}";

            // Aggregate parts of the file together
            var fileContent = static.mhtml.top.replace("_html_", static.mhtml.head.replace("_styles_", styles) + static.mhtml.body.replace("_body_", '')) + mhtmlBottom;

            // Create a Blob with the file contents 
            var blob = new Blob([fileContent], {
                type: "application/msword;charset=utf-8"
            });
            saveAs(blob, 'PRESTACION_DE_SERVICIOS_MENSUAL' + ".doc");

        }










       




}


function CreateFileCerficado() {


    word = "<html><head><meta charset='UTF-8'></meta>";
    word += "</head><body>";
 	word += "<div style='font-size: 48pt;font-family:Bell MT'><center> CERTIFICADO</center></div>";
    word += "<div style='font-family:Bell MT'><center><img src='logo.png' width='349' height='180'><center><br><br><br></div>";
    
    word += "<div style='font-family: Baskerville Old Face;font-size: 20pt'; margin: 10px;><center><b>ACLARA:</b></center><br><br></div>";
    word += "<div style='font-family: Calibri;font-size: 16pt; text-align: justify;'><p>Que el contrato Nº<b>____<u>"
         + document.getElementById("num_contrato").value.toUpperCase() 
         +"</u>____</b> a nombre del Sr. <b>_<u>" 
         + document.getElementById("nombres").value
         + "</u>__</b> Identificado con DNI. <b>____<u>"
         + document.getElementById("dni").value
         + "</u>____</b> podrá hacer uso de los beneficios de su membresía una vez cancelado el valor de la cuota inicial del total de la misma que corresponde al <b>____<u>"
         
         + document.getElementById("cuota_inicial").value
         +"</u>___% </b> </p> <br><br></div>";
   	word += "<div style='font-family: Calibri ;font-size: 11pt'><center><b><em>AUTORIZADO POR:</em></b></center><br><br><br><br><br><br><br><br><br><br></div>";
    word += "<div style='font-family: Calibri ;font-size: 11pt'><center>CORREOS: <u style='color: rgb( 5 , 99 , 193)'>servicioalcliente@cieneguillariberadelrio.com</u></center></div>";
    word += "<div style='font-family: Calibri ;font-size: 11pt'><center><u style='color: rgb( 5 , 99 , 193)'>pagos@cieneguillariberadelrio.com </u> </center></div>";
    word += "<div style='font-family: Calibri ;font-size: 11pt'><center><u style='color: rgb( 5 , 99 , 193); margin-left: 15px; padding-left:15px;'>reservas@cieneguillariberadelrio.com</u></center></div>";

    word += "</body></html>";    
}

function CreateFilePagare() {

    console.log(dateLarge(document.getElementById('fecha_pagare1').value));

    //var minum_cuotas = document.getElementById("num_cuotas");
    //var num_cuotas_letras = minum_cuotas.options[minum_cuotas.selectedIndex].innerText;



word = "<html " 
     + " xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'" 
     + " xmlns:w='urn:schemas-microsoft-com:office:word' "
     + " xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"
     + " xmlns='http://www.w3.org/TR/REC-html40' >"
     + " <head><meta charset='UTF-8'></meta><style type='text/css'>"
     + "@page WordSection1{size:612.0pt 792.0pt;margin:28.4pt 23.7pt 70.85pt 1.0cm;mso-header-margin:35.4pt;mso-footer-margin:35.4pt;mso-paper-source:0;}div.WordSection1{page:WordSection1;}"
     + "</style>";

    word += "</head><body lang='EN-US' style='tab-interval:35.4pt' ><div class=WordSection1></div>";

   

    
    var array_pagares = new Array();
    var array_pagares_fechas = new Array();
    var array_pagares_cuotas = new Array();
    var array_tasa_anual = new Array();


    var mi_num_pagares = document.getElementById('num_pagares');
    var mi_valor_pagares = mi_num_pagares.options[mi_num_pagares.selectedIndex].value;



    if (mi_valor_pagares >= 1) {
        array_pagares[0] = document.getElementById('monto_pagare1').value;
        array_pagares_fechas[0] = document.getElementById('fecha_pagare1').value;
        array_pagares_cuotas[0] = document.getElementById('cuotas_pagare1').value;
        array_tasa_anual[0] = document.getElementById('tasa_anual_pagare1').value;
    }
    if (mi_valor_pagares >= 2) {
        array_pagares[1] = document.getElementById('monto_pagare2').value;
        array_pagares_fechas[1] = document.getElementById('fecha_pagare2').value;
        array_pagares_cuotas[1] = document.getElementById('cuotas_pagare2').value;
        array_tasa_anual[1] = document.getElementById('tasa_anual_pagare2').value;
    }
    if (mi_valor_pagares >= 3) {
        array_pagares[2] = document.getElementById('monto_pagare3').value;
        array_pagares_fechas[2] = document.getElementById('fecha_pagare3').value;
        array_pagares_cuotas[2] = document.getElementById('cuotas_pagare3').value;
        array_tasa_anual[2] = document.getElementById('tasa_anual_pagare3').value;
    }
    if (mi_valor_pagares >= 4) {
        array_pagares[3] = document.getElementById('monto_pagare4').value;
        array_pagares_fechas[3] = document.getElementById('fecha_pagare4').value;
        array_pagares_cuotas[3] = document.getElementById('cuotas_pagare4').value;
        array_tasa_anual[3] = document.getElementById('tasa_anual_pagare4').value;
    }
    if (mi_valor_pagares == 5) {
        array_pagares[4] = document.getElementById('monto_pagare5').value;
        array_pagares_fechas[4] = document.getElementById('fecha_pagare5').value;
        array_pagares_cuotas[4] = document.getElementById('cuotas_pagare5').value;
        array_tasa_anual[4] = document.getElementById('tasa_anual_pagare5').value;
    }

    console.log(array_tasa_anual);
    /*inicio del for*/
    for (var i = 0; i < mi_valor_pagares; i++) {



    word += "<div style='font-size: 12pt;font-family:Calibri'><center><b> PAGARÉ N° <u>" 
             + (i + 1) 
             + "</u></b></center></br></div>";

    word += "<div style='font-size: 10pt;font-family:Calibri'><center><b> POR UN VALOR DE (<u>&nbsp;" 
             + NumerosaLetras((array_pagares[i] * parseFloat(document.getElementById('tipo_cambio').value)))
             + " SOLES</u>)</b></center></br></div>";

    word += "<div style='font-size: 10pt;font-family:Calibri'><center>(S/.&nbsp;<u>" 
         + parseFloat(array_pagares[i]* parseFloat(document.getElementById('tipo_cambio').value)).toFixed(2)
         + "&nbsp;</u>) ESTE VALOR ES EL SALDO A FINANCIAR</center></br></div>";

    word += "<div style='font-size: 10pt;margin: 0;padding:0;font-family:Calibri;text-align: justify;'><span> Yo <b>" 
         + document.getElementById("nombres").value.toUpperCase() /*+ " "+document.getElementById("apellidos").value*/
         + "</b> identificado(a) con DNI Nº <b>"
         + document.getElementById("dni").value
         + "</b> con domicilio y residencia en <b>"
         + document.getElementById("domicilio").value.toUpperCase()  
         + "</b> </span></div>";  
    word += "<div style='font-size: 10pt;margin: 0;padding:0;font-family:Calibri;text-align: justify;'><span> "
        + "Me comprometo a pagar incondicionalmente a VALLE ENCANTADO S.A.C la suma de <b>" 
        + NumerosaLetras((array_pagares[i] * parseFloat(document.getElementById('tipo_cambio').value)))
        + " SOLES </b> (S/ <b><u>&nbsp;" 
        + parseFloat(array_pagares[i] * parseFloat(document.getElementById('tipo_cambio').value)).toFixed(2)
        + "&nbsp;</u></b>) pagadero en <b>"
        + parseFloat(array_pagares_cuotas[i]).toFixed(2)
        + "</b> cuotas mensuales y consecutivas con vencimiento la primera de ella el día <b>"
        + dateLarge(array_pagares_fechas[i])
        + "</b> , por valor de (S/. <b><u>&nbsp;"
   /**/ + (calcularCuotaMensual((array_pagares[i]  * parseFloat(document.getElementById('tipo_cambio').value)),array_tasa_anual[i],array_pagares_cuotas[i]).toFixed(2))
        + "&nbsp;</u></b> ). El pago de dichas cuotas se realizará en Soles a razón del cambio oficial vigente a la fecha en que se efectúe éste. En caso de mora y mientras ella subsista pagaré intereses moratorios a la tasa máxima establecida para el periodo correspondiente. De igual manera me obligo a pagar todos los gastos y costos de la cobranza judicial.  </span></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>En el evento en que el deudor no pague en el plazo estipulado una o más cuotas, el tenedor de este título podrá declarar vencidos todos los plazos de esta obligación y pedir su inmediato pago total o el pago del saldo.</span></b></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>También acepto que <b>VALLE ENCANTADO S.A.C</b>, declare de plazo vencido la obligación a la que se refiere este pagaré y exigir su pago total en el evento en que sea perseguido judicialmente. El recibo de abono de parciales no implica novación y cualquier pago que se efectúe se imputará primero a gastos, penalidades, y por último a capital. El suscriptor de este pagaré hace constatar que la obligación de pagarla indivisiblemente y solidariamente subsiste en caso de prórroga o prórrogas o de cualquier modificación a lo estipulado. El deudor declara que la suma que debe conforme a este pagaré, no estará sujeta ni a deducción ni a descuentos de cualquier naturaleza, incluyendo sin limitación cualquier impuesto que pueda gravar su pago, por lo tanto, en caso de existir alguna de estas deducciones o descuentos, el deudor deberá aumentar la suma a pagar de tal manera que el tenedor reciba siempre el valor estipulado del pagaré. El deudor acepta desde ahora el endoso, cesión o transferencia que de este pagaré a VALLE ENCANTADO S.A.C. todos los gastos e impuestos relacionados con la suscripción de este pagaré serán por cuenta del deudor. </span></div>";
    word += "<div style='font-family: Calibri ; margin: 3px;padding:3px;font-size: 10pt;text-align: justify;'> <span>Todos los pagos que deban hacerse según este pagaré serán hechos exclusivamente en Soles, a la <b>Cuenta Recaudadora Soles BCP N°193-2361209-0-94</b>, en su oficina central ubicada en Av. Guardia Civil 1321 oficina 602 – Surquillo o en Ribera del Río Club Resort ubicada en Mz. B Lt. 72. Tercera Etapa - Cieneguilla. </span> </div>";

    word += "<div style='font-family: Calibri ;margin: 0;padding:0;font-size: 10pt;text-align: justify;'><span>Todos los cálculos de intereses se efectuarán sobre la base de un año de trescientos sesenta (360) días, en cada caso por el número de días efectivamente transcurridos (incluyendo el primer día, pero excluyendo el último día) durante el pazo por el cual deban pagarse tale intereses. Si cualquiera de las fechas de pago de principal o intereses antes indicadas coincidiera con un día no hábil, se entenderá que el pago respectivo deberá ser efectuado el día hábil inmediatamente siguiente.</span></div>";

    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Cualquier referencia en este pagaré al agente deberá entenderse efectuada a cualquier tenedor del mismo, sea que lo adquiera por endoso o de otro modo.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>En caso de mora, no será necesario requerimiento alguno para que el Cliente incurra en la misma, de acuerdo a lo establecido en el artículo 1333 inciso 1 del Código Civil Peruano. En dicho caso, durante todo el periodo de incumplimiento el cliente pagara a una tasa equivalente al máximo de interés permitido por la ley, por concepto de interés moratorio.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>De conformidad con lo establecido por el artículo 158.2 concordante con el artículo 52° de la Ley de Títulos Valores, este pagaré no requerirá ser protestado por la falta de pago de cualquiera de las cuotas para ejercitar las acciones derivadas del mismo.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Adicionalmente, el cliente se obliga incondicionalmente a pagar al Agente todos los gastos en que éste incurra en razón de su incumplimiento, obligándose a pagar sobre éstos el mismo interés moratorio pactado en este pagaré.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Asimismo, el cliente acepta las renovaciones y prórrogas de vencimiento de este pagaré que el agente considere conveniente efectuar, ya sea por su importe parcial o total, aun cuando no hayan sido comunicadas al cliente. Dichas modificaciones serán anotadas en este mismo instrumento o en hoja anexa, sin que sea necesaria la suscripción de tal instrumento.</b></span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Este pagare se devolverá a su cancelación total. Queda expresamente establecido que el domicilio del cliente es "
         + "<b>" + document.getElementById("domicilio").value.toUpperCase()
         + " - Lima Perú</b>, lugar a donde se dirigirán todas las comunicaciones y notificaciones derivadas de este pagaré. </span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Queda establecido que las obligaciones contenidas en este pagaré, constituyendo el presente acuerdo pacto en contrario a lo dispuesto por el artículo 1233° del Código Civil.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Este pagaré se regirá bajo las leyes de la República del Perú.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>Cualquier acción o procedimiento legal relacionado con y derivado del presente pagaré podrá ser iniciado ante los órganos judiciales del Cercado de Lima, Lima, Perú. El cliente renuncia a la jurisdicción de cualquier otro tribunal que pudiere corresponderle por cualquier otra razón.</span></div>";
    word += "<div style='font-family: Calibri ;font-size: 10pt;text-align: justify;'><span>En constancia de lo anterior, se firma el presente pagaré el día <b>" 
    + dateLarge(document.getElementById("fecha_actual").value)
    + "</b> en la ciudad de Lima, <br>El Deudor.<br><br></span></div>";
     

    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>_______________________</div>";
    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>FIRMA</div>";
    word += "  <div style='margin-left: 350px ;font-family: Calibri ;font-size: 10pt'>DNI N° <b>"
         + document.getElementById("dni").value
         +"</b></div><br><br><br>";

    }/*fin de for*/


    word += "</body></html>";
    
}





function guardarImagenFichero (img) { 
    if (typeof img == 'object') 
    img = img.src; 
    window.newW = open (img); 
    newW.document.execCommand("SaveAs"); 
    newW.close(); 
} 
function calc() { 
	 var pmf = parseInt(document.getElementById("max_financiamiento_porcentaje").value.toString());
	 var cuoIni = 100 - pmf ;
	 console.log(cuoIni);
	 document.getElementById("cuota_inicial").value = cuoIni.toString();

}


function fechanom(){
    var fecha =new Date();
    var actual = fecha.getDate()+"/"+fecha.getMes()+"/"+fecha.getFullYear();
    var verdad = fecha.getFullYear()+"/"+fecha.getMes()+"/"+fecha.getDate();
    document.getElementById("fecha").value = verdad.value;
    
}
function fin(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date(); /*fecha de la computadora*/
    var fechainput=document.getElementById("fecha").value; /*fecha seleccionada en el input*/
    var hola =  (/*diasSemana[f.getDia()] + ", " +*/ f.getDate() + " de " + meses[f.getMes()] + " de " + f.getFullYear());

    var k =  ( f.getFullYear()  + "-" + f.getMes() + "-" +f.getDate());
    document.getElementById("fecha").value = (f.getFullYear()  + "-" + f.getMes() + "-" +f.getDate());
    var parts = fechainput.split("-");
    
    anio = parts[0];
    var mes = parseInt(parts[1]); 
    dia = parts[2]; 
    mestext= meses[mes-1];
    document.getElementById("anotar").value = dia +" "+ mestext +" "+ anio ;
    var qqq = dia +" "+ mestext +" "+ anio ;
    
}


function api_tipo_cambio() {
    /*
    URL = 'https://www.deperu.com/api/rest/cotizaciondolar.json'
    fetch(URL)
        .then(response => response.json())
        .then(response => {
        var resp = response.Cotizacion[0].Venta;
        document.getElementById("tipo_cambio").value = resp;
        rtp = resp;
        console.log(resp);
    });
       */ 
}



function cambio_a_soles(){
    var mdol = parseFloat(document.getElementById("monto_dolares").value.toString());
    var rtp = parseFloat(document.getElementById("tipo_cambio").value.toString());

    var cambio = rtp * mdol;
    document.getElementById("monto_soles").value = cambio.toString();
}

function fun(){
   /* var abcd = NumerosaLetras(document.getElementById("monto_soles").value); 
    document.getElementById("resp").value = abcd;
    */
}


function dateLarge(date){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date(date);
    return ((getDia(f)) + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}


