import { app } from './index'
import { v4 as uuidv4 } from 'uuid';

interface ICustomer{
  email: string
  password: string
  name: string
}

class Customer{
  url: string;

  constructor(){
    this.url = "/customers"
  }

  async getUser(email: string){
    try {
      const { data } = await app(this.url)
      const [ user ] = data.filter((customer:ICustomer) =>{ return customer.email === email})
      if(!user){
        throw("error")
      }
      return user

    } catch (error) {
      return error
    }
  }

  async login(email: string, password: string){
    try {
      const { data } = await app(this.url)
      const [ user ] = data.filter((customer:ICustomer) =>{ return customer.email === email})
      if(!user || user.password !== password){
        throw("error")
      }
      return {message:"login realizado com sucesso",user}

    } catch (error) {
      return {message:"Usuario não encontrado.", user:{}}
    }
  }

  async createUser(name: string, lastName: string, email: string, password:string){
    try{
      await app.post(this.url,{id:uuidv4(),name,lastName,email,password})
      return 'Usuario cadastrado com sucesso!'
    } catch (err) {
      return 'Operação não realizada, tente novamente.'
    }
  }


}

export default new Customer()
