export const validateEmailParticular = (email) => {
  if (!email || email === '') {
    return 'El email no puede estar vacío'
  }

  return true
}
export const validateEmailConfirmationParticular = (email, email2) => {
  if (email !== email2) {
    return 'Los emails no son iguales'
  }

  return true
}
export const validateNombreParticular = (nombre) => {
  if (!nombre || nombre === '') {
    return 'El nombre no puede estar vacío'
  }

  return true
}
export const validateApellidoParticular = (apellido) => {
  if (!apellido || apellido === '') {
    return 'El apellido no puede estar vacío'
  }

  return true
}
export const validateGeneroParticular = (genero) => {
  if (!genero || genero === '') {
    return 'El genero no puede estar vacío'
  }

  return true
}
export const validateTipoCedulaParticular = (tipoCedula) => {
  if (!tipoCedula || tipoCedula === '') {
    return 'El tipoCedula no puede estar vacío'
  }

  return true
}

export const validateCedulaParticular = (cedula) => {
  if (!cedula || cedula === '') {
    return 'La cedula no puede estar vacío'
  }

  return true
}
export const validateFechaParticular = (fecha) => {
  if (!fecha || fecha === '') {
    return 'La fecha no puede estar vacío'
  }

  return true
}
export const validateTelefonoParticular = (telefono) => {
  if (!telefono || telefono === '') {
    return 'El telefono no puede ir vacio'
  }

  return true
}

export const validateCelularParticular = (celular) => {
  if (!celular || celular === '') {
    return 'El celular no puede ir vacio'
  }

  return true
}
export const validateDireccionParticular = (direccion) => {
  if (!direccion || direccion === '') {
    return 'La direccion no puede ir vacio'
  }

  return true
}
export const validateCiudadParticular = (ciuidad) => {
  if (!ciuidad || ciuidad === '') {
    return 'La ciudad no puede ir vacio'
  }

  return true
}
export const validateLocalidadParticular = (localidad) => {
  if (!localidad || localidad === '') {
    return 'La localidad no puede ir vacio'
  }

  return true
}

export const validateEmail = (email) => {
  if (!email || email === '') {
    return 'El email no puede estar vacío'
  }

  return true
}

export const validateEmailConfirmation = (email, email2) => {
  if (email !== email2) {
    return 'Los emails no son iguales'
  }

  return true
}

export const validateNombre = (nombre) => {
  if (!nombre || nombre === '') {
    return 'El nombre no puede estar vacío'
  }

  return true
}
export const validateRazon = (razon) => {
  if (!razon || razon === '') {
    return 'La razon social no puede ir vacio'
  }

  return true
}

export const validateNit = (nit) => {
  if (!nit || nit === '') {
    return 'El nit no puede ir vacio'
  }

  return true
}
export const validateTelefono = (telefono) => {
  if (!telefono || telefono === '') {
    return 'El telefono no puede ir vacio'
  }

  return true
}

export const validateCelular = (celular) => {
  if (!celular || celular === '') {
    return 'El celular no puede ir vacio'
  }

  return true
}
export const validateDireccion = (direccion) => {
  if (!direccion || direccion === '') {
    return 'La direccion no puede ir vacio'
  }

  return true
}
export const validateCiudad = (ciuidad) => {
  if (!ciuidad || ciuidad === '') {
    return 'La ciudad no puede ir vacio'
  }

  return true
}
export const validateLocalidad = (localidad) => {
  if (!localidad || localidad === '') {
    return 'La localidad no puede ir vacio'
  }

  return true
}
export const validateContraseña = (contraseña) => {
  if (!contraseña || contraseña === '') {
    return 'La contraseña no puede estar vacía'
  }

  return true
}

export const validateRepetirContraseña = (contraseña, contraseña2) => {
  if (contraseña !== contraseña2) {
    return 'Las contraseñas no son iguales'
  }

  return true
}
export default {
  email: validateEmail,
  emailConfirmacion: validateEmailConfirmation,
  emailParticular: validateEmailParticular,
  emailConfirmacionParticular: validateEmailConfirmationParticular,
  nombreEmpresa: validateNombre,
  razonSocial: validateRazon,
  nit: validateNit,
  telefono: validateTelefono,
  celular: validateCelular,
  ciudad: validateCiudad,
  direccion: validateDireccion,
  localidad: validateLocalidad,
  contraseña: validateContraseña,
  repetirContraseña: validateRepetirContraseña,
  nombreParticular: validateNombreParticular,
  apellidoParticular: validateApellidoParticular,
  generParticlar: validateGeneroParticular,
  tipoCedulaParticular: validateTipoCedulaParticular,
  cedulaParticular: validateCedulaParticular,
  fechaParticular: validateFechaParticular,
  telefonoParticular: validateTelefonoParticular,
  celularParticular: validateCelularParticular,
  direccionParticular: validateDireccionParticular,
  ciudadParticular: validateCiudadParticular,
  localidadParticular: validateLocalidadParticular,
}
