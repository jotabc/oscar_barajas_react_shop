import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'https://api.escuelajs.co/api/v1/products'

export const useGetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API)
      setProducts(response.data)
    }
    fetchData()
  }, [])

  return products
}
