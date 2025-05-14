function validarFormulario(){
    let txtgerente = document.getElementById('gerente').value;
    let txtdomicilio = document.getElementById('domicilio').value;
    let txtemail = document.getElementById('email').value;
    let txttelefono = document.getElementById('telefono').value;

//test Gerente de Compras/Ventas
if(txtgerente == null || txtgerente.length == 0 || /^\s+S/.test(txtgerente)){
    alert('Error: el campo Gerente de Compras/Ventas no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Email Gerente
if(txtemail == null || txtemail.length == 0 || /^\s+S/.test(txtemail)){ 
    alert('Error: el campo Email no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Domicilio de la Empresa
if(txtdomicilio == null || txtdomicilio.length == 0 || /^\s+S/.test(txtdomicilio)){
    alert('Error: el campo Domicilio no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

//test Teléfono
if(txttelefono == null || txttelefono.length == 0 || /^\s+S/.test(txttelefono)){
    alert('Error: el campo El número de Celular del Gerente de Ventas no debe ir vacío o lleno de solamente espacios en blanco');
    return false;
    }

return true;
}