import axios from "axios"
// import { ACCESS_TOKEN } from "../util/settings"

export default class baseService{
    get = (url, ACCESS_TOKEN) => {
      return axios({
        url: url,
        method: 'GET',
        headers:{
          "Authorization": ACCESS_TOKEN
        }
      })
    }


    post = (url, data, ACCESS_TOKEN) => {
      return axios({
        url: url,
        method: 'POST',
        data: data,
        headers:{
          "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
      })
    }
    put = (url, data, ACCESS_TOKEN) => {
      return axios({
        url: url,
        data: data,
        method: 'PUT',
        headers:{
          "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
      })
    }
    delete = (url, ACCESS_TOKEN) => {
      return axios({
        url: url,
        method: 'DELETE',
        headers:{
          "Authorization": ACCESS_TOKEN
        }
      })
    }
}