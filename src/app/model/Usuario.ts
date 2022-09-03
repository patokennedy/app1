export class Usuario {
  public nombreUsuario = '';
  public password = '';
  public nombrePersona= "";

  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length !== 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
  public getUsuarios(): Usuario[] {
    const usuarios = [];
    usuarios.push({ nombreUsuario: 'atorresl@duocuc.cl', password: '1234', nombrePersona: 'Ana Torres Leiva'});
    usuarios.push({ nombreUsuario: 'jperez@duocuc.cl', password: '5678', nombrePersona: 'Juan Pérez'});
    usuarios.push({ nombreUsuario: 'gvega@duocuc.cl', password: '0987', nombrePersona: 'Gustavo Vega'});

    return usuarios;
  }

  public validarCuentasUsuarios(nombreUsuario: string, password: string): boolean {
    let respuesta: boolean = false;

    this.getUsuarios().forEach(u => {
      if (nombreUsuario === u.nombreUsuario && password === u.password) {
        alert('Saludo Internauta ' +  u.nombrePersona);
        respuesta = true;
      }
    });
    return respuesta;
  }
}


