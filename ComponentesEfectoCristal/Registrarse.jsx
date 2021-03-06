import React,{useState} from 'react';
import {Router,Redirect,Link} from "react-router-dom";
// Para los formularios
import { useForm } from 'react-hook-form';
// Para las peticiones
import axios from "axios";
// Importamos useHistory para manejar las redirecciones de las funciones cuando el usuario se registra o entra
import { useHistory } from 'react-router';
// CSS
import "./Registrarse.css";

const Registrarse = (props) => {
// función que usamos para pasar los datos del servidor a la App principal
const { gestionarAcceso } = props; 
// Constante para poder usar el useHistory
const history = useHistory();
// variable de estado que indica si el usuario existe o no en la base de datos.
const [tieneAcceso, setTieneAcceso] = useState(false); 
const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
} = useForm(); // hook del formulario para 'react-hook-form'
    const onSubmit = async (data) => {
		// Envío de los datos del formulario ( data ) al servidor
		console.log(data);
			await axios
				.post('rutaRegistrarse', {
                    // nombre:data.nombre,
					// email: data.email,
					// password: data.password,
				})
				.then((response) => {
					console.log('Registro Correcto');
                    // enviamos a la App la respuesta del servidor, que contiene el token creado por este
					gestionarAcceso(response.data);
					history.push("/login");
				})
				.catch((error) => {
					console.log(error);
				});
	};
    return (
        <div className="divLogin">
            <div className="formLogin">
                <h2>Registrarse</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
                    <input
						type='text'
						placeholder='Nombre'
						{...register('nombre', { required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.nombre && errors.nombre.type === 'required' && (
						<span>Se requiere nombre de Usuario</span>
					)}
					<input
						type='text'
						placeholder='Email'
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.email && errors.email.type === 'required' && (
						<span>Se requiere e-mail válido</span>
					)}
					{errors.email && errors.email.type === 'pattern' && (
						<span>Se requiere e-mail válido</span>
					)}
					<input
						type='password'
						placeholder='Password'
						{...register('password', { required: true, minLength: 8 })}
					/>
					{errors.password && errors.password.type === 'required' && (
						<span>Se requiere contraseña</span>
					)}
					{errors.password && errors.password.type === 'minLength' && (
						<span>Mínimo de 8 caracteres</span>
					)}
					<div className="botonesForm">
						<input type='submit' value="Registrarse"/>
						<input type='submit' onClick={()=>onSubmit()} value="Login"/>
					</div>
				</form>
				{/* <button><Router><Link to="/" className="">Registrarse</Link></Router></button> */}
			</div>
			<div class="circle1"></div>
    		<div class="circle2"></div>

        
        </div>
    )
}

export default Registrarse
