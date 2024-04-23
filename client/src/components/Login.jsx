import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState()
    const [password, setPassword] = useState()
    
    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    // for incorrect username n password
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {emailOrUsername, password})
        .then(result => {console.log(result)
            if(result.data === "Succes"){
                navigate('/home')
            } else if (result.data === "the password is incorrect"){
                console.log("Password is incorrect");
            } else if (result.data === "No record Exist") {
                console.log("No record exists");
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className=''>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">PYRIM</h2>
            </div>

            <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-900'>Username / Email</label>
                        <div className="mt-2">
                            <input type="text" className='block w-full rounded-md border-0 pl-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                                onChange={(e) => setEmailOrUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2" style={{ position: 'relative' }}>
                            <input name="password" 
                            type={showPassword ? "text": "password"} 
                            value={password}
                            autoComplete="current-password" required className="block w-full rounded-md border-0 pl-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button 
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '8px',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye/>}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login