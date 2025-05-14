function validarFormulario(){
    let txtNombre = document.getElementById('razon').value;
    let txtFecha = document.getElementById('fecha').value;
    let txtDomicilio = document.getElementById('domicilio').value;
    let txtEstado = document.getElementById('estado').value;
    let txtCodPostal = document.getElementById('cp').value;
    let txtEmailGte = document.getElementById('email').value;
    let txtResponsable = document.getElementById('responsable').value;
    let txtRegistro = document.getElementById('registro').value;
    let txtObservaciones = document.getElementById('observaciones').value;

//test Razón Social
if(txtNombre == null || txtNombre.length == 0 || /^\s+S/.test(txtNombre)){
    alert('Error: el campo Razón Social no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Fecha de Ingreso
if(txtFecha == null || txtFecha.length == 0 || /^\s+S/.test(txtFecha)){
    alert('Error: el campo Fecha no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Domicilio
if(txtDomicilio == null || txtDomicilio.length == 0 || /^\s+S/.test(txtDomicilio)){ 
    alert('Error: el campo Domicilio no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Estado/Provincia
if(txtEstado == null || txtEstado.length == 0 || /^\s+S/.test(txtEstado)){
    alert('Error: el campo Estado/Provincia no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Código Postal
if(txtCodPostal == null || txtCodPostal.length == 0 || /^\s+S/.test(txtCodPostal)){
    alert('Error: el campo Código Postal no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Email Gerente
if(txtEmailGte == null || txtEmailGte.length == 0 || /^\s+S/.test(txtEmailGte)){
    alert('Error: el campo Email Gerente no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Responsable/Gerente
if(txtResponsable == null || txtResponsable.length == 0 || /^\s+S/.test(txtResponsable)){
    alert('Error: el campo Responsable/Gerente no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Nº de Registro Comercial
if(txtRegistro == null || txtRegistro.length == 0 || /^\s+S/.test(txtRegistro)){
    alert('Error: el campo Nº de Registro Comercial no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//Observaciones
if(txtObservaciones == null || txtObservaciones.length == 0 || /^\s+S/.test(txtObservaciones)){
    alert('Error: el campo Observaciones no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

return true;
}