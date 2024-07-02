import React from 'react'
import Logo from '../../../public/svg/Logo'
import TextField from '../../assets/components/TextField'
import Form from '../../assets/components/Form'
import Button from '../../assets/components/Button'

export default function Login() {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center p-8'>
                <div className='text-center mb-8 md:mb-0 md:mr-8'>
                    <p className='text-gray-700 text-lg'>Hola!, Bienvenido a</p>
                    <h1 className='text-4xl font-bold text-primary'>
                        Insignia ITSOEH
                    </h1>
                    <Logo size={400}/>
                </div>
                <div className='w-full md:w-96 grid  gap-2'>
                    <h2 className='text-4xl font-bold text-center text-primary py-3'>INICIA SESIÓN</h2>
                    <Form method={"post"}>
                        <div className='grid gap-6'>
                            <TextField etiqueta={"Correo electrónico"} type={"text"} />
                            <TextField etiqueta={"Contraseña"} type={"password"} />
                            <Button value={"Iniciar sesión"} type={"submit"} />
                        </div>
                    </Form>
                    <Button value={"Registrarme"} type={"button"} />
                </div>
            </div>
        </div>
    )
}
