


function calcularCuotaMensual(m,ta,nq) {
	var cuotaMensual = ((m * _TasaMensual(ta))/(1.0 - (Math.pow((1.0 + _TasaMensual(ta)),(-1*nq)))));
	return cuotaMensual;
}


function _TasaMensual(ta){

	var tasaMensual = 0;

	if (ta == 0) {
		tasaMensual = (Math.pow((1.0 + parseFloat((0.0000000001/100))),(1.0/12.0)) - 1);
	}else{
		tasaMensual = (Math.pow((1.0 + parseFloat((ta/100))),(1.0/12.0)) - 1);
	}
	return tasaMensual;
}

