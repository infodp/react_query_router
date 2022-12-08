import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { getById } from '../utilities/api'

const Details = () => {
  const urlParams = useParams()  
  const productId = urlParams.id
  
  const {data, error, isError, isLoading, status} = useQuery(['products', productId], () => getById(productId))

  if(isError) {
    return <span>Error {error.message}</span>
  }
  if(isLoading) {
    return <span>Loading...</span>
  }
 /*  if(status === 'loading') {
    return <span>Loading...</span>
  } */

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.category}
        </h5>    
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
        </p>
        <Link 
            to="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back        
        </Link>
    </div>
  )
}

export default Details