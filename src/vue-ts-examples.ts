import { defineVue , boot } from './node_modules/tauri-kargo-tools/dist/vue.ts'



class Compute {
    value: number
    sqrtValue: number 
    constructor() {
        this.value = 0
        this.sqrtValue = 0
    }
    computeValue() {
        this.value = this.sqrtValue*this.sqrtValue
    }
    computeValueSqrt() {
        this.sqrtValue = Math.sqrt(this.value)
    }
}
defineVue(Compute,(vue)=> {
   
        vue.flow( { orientation:"row",gap:5} ,()=> {
            vue.input( { name:"sqrtValue", update:"computeValue" , inputType:"number",width:"50%"})
            vue.input( { name:"value" , update:"computeValueSqrt" , inputType:"number" ,width:"50%"})
        })
   
})
boot(new Compute(),"#app")


