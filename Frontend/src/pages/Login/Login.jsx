import React,{useState} from 'react';
import {Router,Redirect,Link} from "react-router-dom";
// Para los formularios
import { useForm } from 'react-hook-form';
// Para las peticiones
import axios from "axios";
// Importamos useHistory para manejar las redirecciones de las funciones cuando el usuario se registra o entra
import { useHistory } from 'react-router';
// CSS
import "./Login.css";

const Login = (props) => {
    const { gestionarAcceso } = props;
    // variable de estado que indica si el usuario existe o no en la base de datos.
	const [tieneAcceso, setTieneAcceso] = useState(false); 
    // Variables que se usan en los formularios de react
    const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm(); // hook del formulario para 'react-hook-form'

	const[errorForm,setErrorForm] = useState("");
    const onSubmit = async(data) =>{
        // Envío de los datos del formulario ( data ) al servidor
		// console.log(data);
			await axios
            .post('http://tsundoku-application.herokuapp.com/api/tsundoku/usuarios/login', {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                console.log('Login Correcto');
                gestionarAcceso(response.data);
                // Aqui, una vez logueado con exito lo redireccionamos al componente main por su ruta definida en el APP.js
                history.push("/tsundoku/inicio");
                // enviamos a la App la respuesta del servidor, que contiene el token creado por este
            })
            .catch((error) => {
				setErrorForm(error.response.data.mensaje);	
            });

    }
    return (
        <div className="divLogin">
			<div className="formLogin">
					<h2>Login</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
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

						<input type='submit' value="Login"/>
						<input type='submit' value="Registrarse"/>
					</div>
				</form>
				{errorForm!=""?<div>{errorForm}</div>:null}
				{/* <button><Router><Link to="/" className="">Registrarse</Link></Router></button> */}
			</div>
			<div class="circle1"></div>
    		<div class="circle2"></div>
        </div>
    )
}

export default Login
