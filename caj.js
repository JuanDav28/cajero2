let nombreusuario, clave, saldo 

clave = 2810;
saldo = 15000;

nombreusuario = prompt("ingrese su usuario");
clave = parseInt(prompt("ingrese clave  digitos"));

// } else if (nombreusuario != "juand" && clave != 2810) {
//     alert ("usuario y clave incorrectos.");
//     nombreusuario = prompt("ingrese usuario");
//     clave =parseInt(prompt("ingrese clave nuevamente"));
//     if(nombreusuario != "juand" && clave != 2810) 
//     alert ("usuario y clave incorrectos.");
//     if(nombreusuario != "juand" && clave != 2810) 
//     alert ("usuario y clave incorrectos.");
//     nombreusuario = prompt("ingrese usuario");
//     clave =parseInt(prompt("ingrese clave nuevamente"));
//     if(nombreusuario != "juand" && clave != 2810) 
//     alert ("usuario y clave incorrectos.");
// }


if (nombreusuario=="juand" && clave == 2810) {
   alert ("tu saldo es $15.000")
   document.write (`${nombreusuario} saldo actual ${saldo} COP`); 

} else if (nombreusuario != "juand" && clave != 2810) {
    alert("Usuario y clave incorrectos, te quedan 3 intentos");
    nombreusuario = prompt("Ingrese su usuario");
    clave = parseInt(prompt("Ingrese su clave nuevamente"));
    if(nombreusuario != "juand" && clave != 2810)
    alert ("Usuario y clave incorrectos");
    if (nombreusuario != "juand" && clave != 2810) 
        
        nombreusuario = prompt("Ingrese su usuario");
        clave = parseInt(prompt("Ingrese su clave."));
        alert("Usuario y clave incorrectos");
    // if(nombreusuario != "juand" && clave != 2810)
    // alert("Incorrectos, ten en cuenta que éste serà tu último intento");
    nombreusuario = prompt("Ingrese su usuario.");
    clave = parseInt(prompt("Ingrese su clave."));
    if (nombreusuario == "juand" && clave == 2810)
    document.write (`${nombreusuario} saldo actual ${saldo} COP`);
else 
        alert("¡Tu cuenta ha sido bloqueada!");  
}

// por si ve esto PerformanceEntry, no se como hacer para que en cualquiera de los 3 intentos si esta bien aparezca "document.write (`${nombreusuario} saldo actual ${saldo} COP`);"