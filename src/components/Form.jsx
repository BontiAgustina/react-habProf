import React, { useState } from 'react';

const Form = () => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState("");
    const [nroRemito, setNroRemito] = useState('');
    const [transporte, setTransporte] = useState('');
    const [tipoTransporte, setTipoTransporte] = useState('');
    const [chofer, setChofer] = useState('');
    const [chasis, setChasis] = useState('');
    const [acoplado, setAcoplado] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [posicion, setPosicion] = useState('');
    const [sector, setSector] = useState('');
    const [altura, setAltura] = useState('');
    const [ancho, setAncho] = useState('');
    const [largo, setLargo] = useState('');
    const [alto, setAlto] = useState('');
    const [codigoBWS, setCodigoBWS] = useState('');
    const [idCliente, setIDCliente]= useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
        <div className="bg-white pt-4 pb-4 pl-2 pr-2 rounded-lg shadow-md text-black sm:w-fit md:w-fit lg:w-fit xl:w-fit">
            <div className="bg-red-500 mx-auto rounded-md sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-11/12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mt-5 text-center mb-10 pt-4 pb-4 text-white ">Registrar Ingreso</h1>
            </div>

        <form className= 'py-10 sm:ml-10 md:ml-10 lg:ml-10 xl:px-30 2xl:ml-50 sm:px-5' onSubmit={handleSubmit} >
            <div className='flex flex-wrap '>
            <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5 '>
                    <label htmlFor='idCliente' className='block text-md font-medium leading-6 text-gray-900'> 
                        ID Cliente
                    </label>
                        <input
                            id='idCliente'
                            name="idCliente" 
                            type="text" 
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                            value={idCliente} 
                            required
                            placeholder='ID Cliente'
                            onChange={(e) => setIDCliente(e.target.value)}  
                        />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='codigoBWS' className='block text-md font-medium leading-6 text-gray-900'>
                        Código BWS
                    </label>
                        <input
                            id='codigoBWS'
                            name="codigoBWS" 
                            type="text" 
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                            value={codigoBWS}
                            readOnly
                            placeholder='Código BWS' 
                            onChange={(e) => setCodigoBWS(e.target.value)}  
                        />

                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='fecha' className='block text-md font-medium leading-6 text-gray-900'>
                        Fecha:
                    </label>
                    <input
                        id='fecha'
                        name="fecha"  
                        type="date" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={fecha} 
                        required 
                        onChange={(e) => setFecha(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='hora' className='block text-md font-medium leading-6 text-gray-900'>
                        Hora aproximada de ingreso
                    </label>
                    <input
                        id='hora'
                        name="hora"  
                        type="time" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={hora}
                        required 
                        onChange={(e) => setHora(e.target.value)} 
                    />

                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='nroRemito' className='block text-md font-medium leading-6 text-gray-900'>
                        Nro Remito
                    </label>
                    <input
                        id='nroRemito'
                        name="nroRemito"  
                        type="number" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={nroRemito} 
                        required
                        placeholder='Nro Remito'
                        onChange={(e) => setNroRemito(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='transporte' className='block text-md font-medium leading-6 text-gray-900'>
                        Transporte
                    </label>
                    <input
                        id='transporte'
                        name="transporte"  
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={transporte}
                        required
                        placeholder='Transporte' 
                        onChange={(e) => setTransporte(e.target.value)} 
                    />

                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='tipoTransporte' className='block text-md font-medium leading-6 text-gray-900'>
                        Tipo
                    </label>
                    <input 
                        id='tipoTransporte'
                        name="tipoTransporte" 
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={tipoTransporte} 
                        required
                        placeholder='Tipo de transporte'
                        onChange={(e) => setTipoTransporte(e.target.value)} 
                    />

                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='chofer' className='block text-md font-medium leading-6 text-gray-900'>
                        Chofer
                    </label>
                    <input
                        id='chofer'
                        name="chofer" 
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={chofer}
                        required
                        placeholder='Chofer' 
                        onChange={(e) => setChofer(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='chasis' className='block text-md font-medium leading-6 text-gray-900'>
                        Chasis
                    </label>
                    <input
                        id='chasis'
                        name="chasis" 
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={chasis}
                        required
                        placeholder='Chasis' 
                        onChange={(e) => setChasis(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='acoplado' className='block text-md font-medium leading-6 text-gray-900'>
                        Acoplado
                    </label>
                    <input
                        id='acoplado'
                        name="acoplado" 
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={acoplado} 
                        required
                        placeholder='Acoplado'
                        onChange={(e) => setAcoplado(e.target.value)} 
                    />
                </div>
                
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                <label htmlFor='cantidad' className='block text-md font-medium leading-6 text-gray-900'>
                        Cantidad
                    </label>
                    <input
                        id='cantidad'
                        name="cantidad" 
                        type="number" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={cantidad}
                        required
                        placeholder='Cantidad' 
                        onChange={(e) => setCantidad(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                <label htmlFor='posicion' className='block text-md font-medium leading-6 text-gray-900'>
                        Posición
                    </label>
                    <input 
                        id='posicion'
                        name="posicion"
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        pattern="[A-Za-z]" 
                        maxLength={1} 
                        value={posicion}
                        required
                        placeholder='Posición' 
                        onChange={(e) => setPosicion(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='sector' className='block text-md font-medium leading-6 text-gray-900'>
                        Sector
                    </label>
                    <input
                        id='sector'
                        name="sector" 
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        maxLength={1} 
                        value={sector}
                        required
                        placeholder='Sector' 
                        onChange={(e) => setSector(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='altura' className='block text-md font-medium leading-6 text-gray-900'>
                        Altura
                    </label>
                    <input
                        id='altura'
                        name="altura" 
                        type="number" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={altura} 
                        required
                        placeholder='Altura (cm)'
                        onChange={(e) => setAltura(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='ancho' className='block text-md font-medium leading-6 text-gray-900'>
                        Ancho
                    </label>
                    <input
                        id='ancho'
                        name="ancho" 
                        type="number" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={ancho}
                        required
                        placeholder='Ancho (cm)' 
                        onChange={(e) => setAncho(e.target.value)} 
                    />
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='largo' className='block text-md font-medium leading-6 text-gray-900'>
                        Largo
                    </label>
                    <input
                        id='largo'
                        name="largo" 
                        type="number" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={largo} 
                        required
                        placeholder='Largo (cm)'
                        onChange={(e) => setLargo(e.target.value)}
                    /> 
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='alto' className='block text-md font-medium leading-6 text-gray-900'>
                        Alto
                    </label>
                    <input
                        id='alto'
                        name="alto" 
                        type="text"
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={alto}
                        required
                        placeholder='Alto (cm)'
                        onChange={(e) => setAlto(e.target.value)}
                    /> 
                </div>
                <div className=' w-full md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 sm:mx-2 xs:mx-2 sm:w-auto py-5'>
                    <label htmlFor='descripcion' className='block text-md font-medium leading-6 text-gray-900'>
                        Descripción
                    </label>
                    <textarea
                        id='descripcion'
                        name="descripcion"  
                        type="text" 
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
                        value={descripcion}
                        required
                        placeholder='Descripcion'
                        rows={3}
                        cols={50}
                        resize = 'none'
                        onChange={(e) => setDescripcion(e.target.value)} 
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className='bg-red-500 font-semibold mt-5 rounded-md text-white justify-center px-10 py-2 text-lg leading-6 shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'>
                Guardar
            </button>
        </form>
    </div>
        </>
    );
    }

    export default Form;
