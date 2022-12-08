import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getAll } from '../utilities/api'

const Show = () => {
  //console.log(getAll())
  const {data, isError, error, isLoading} = useQuery('products', getAll)
  
  if(isError) {
    return <span>Error {error.message}</span>
  }
  if(isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className='grid grid-flow-row-dense'>
        <table className='table-auto mt-3'>
            <thead>
                <tr className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
                    <th className='px-4 py-2'>Id</th>
                    <th className='px-4 py-2'>Title</th>
                    <th className='px-4 py-2'>Price</th>
                    <th className='px-4 py-2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                { data.map ( (product) => (
                    <tr key={product.id}>
                        <td className='border px-4 py-2'> {product.id} </td>
                        <td className='border px-4 py-2'> {product.title} </td>
                        <td className='border px-4 py-2'> ${product.price} </td>
                        <td className='border px-4 py-2'>
                            <Link 
                                to={`/products/${product.id}`} 
                                className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded'
                            >
                                View
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Show