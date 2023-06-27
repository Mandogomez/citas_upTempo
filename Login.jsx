import { Link } from 'react-router-dom';
import imgPasos from '../images/pasos.png';

const Login = () => {

    return (
        <>
           <h1 className="bg-blue-800 font-bold text-white text-4xl w-1/3 p-2 rounded-md m-3">Agenda tu cita en Línea</h1> 
           <div>
                <div className="flex justify-around">

                    <div className="w-1/2 my-10">
                        <img src={imgPasos} alt="pasos Registro" className='w-2/3'/>
                    </div>

                    <form 
                    className="my-10 bg-white rounded-lg px-10 py-10 shadow w-1/3"

                    >
                        <div className="my-5">
                            <label
                            className="text-gray-600 block font-bold text-xl"
                            htmlFor="email"
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                placeholder="Email de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                id="email"

                            />
                        </div>
                        <div className="my-5">
                            <label
                            className=" text-gray-600 block font-bold text-xl"
                            htmlFor="password"
                            >
                                Password
                            </label>
                            <input 
                                type="password"
                                placeholder="Password de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                id="password"

                            />
                        </div>

                        <input 
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-blue-800 w-full py-3 mb-5 text-white font-bold  rounded hover:cursor-pointer hover:bg-blue-900 transition-colors"
                        />
                    </form>
                </div>
                <nav className='lg:flex lg:justify-between w-1/3 ml-96'>
                    <Link
                        className='block text-center my-2 text-slate-500 capitalize text-sm'
                        to="registrar"
                    >
                        ¿No tienes una Cuenta? Regístrate
                    </Link>
                    <Link
                        className='block text-center my-2 text-slate-500 capitalize text-sm'
                        to="olvide-password"
                    >
                        Olvide mi Password
                    </Link>
                </nav>
           </div>
        </>
    );
}

export default Login;
