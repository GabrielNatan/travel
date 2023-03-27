import { app } from './index'

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


}

export default new Customer()
