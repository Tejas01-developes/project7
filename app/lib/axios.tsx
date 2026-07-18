import axios from 'axios';
import { clearaccess, getaccess, setaccess } from './token';

const token=getaccess()


export const api=axios.create({
    baseURL:"http://localhost:4000/apis",
    withCredentials:true
})

api.interceptors.request.use((config)=>{
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (response) => response,

    async (error)=>{
        const originalreq=error.config

        if(error.response?.status === 401 && !originalreq._retry){
            originalreq._retry=true

            try{
                const {data} =await axios.post(
                    'http://localhost:4000/apis/refresh',
                    {},
                    {withCredentials:true}
                )
                setaccess(data.access)

                originalreq.headers.Authorization=`Bearer ${data.access}`
                return api(originalreq)
            }catch(err){
              clearaccess()
                window.location.href='/login'
                return Promise.reject(err)
            }
           
        }
        return Promise.reject(error)
    }


)

export default api