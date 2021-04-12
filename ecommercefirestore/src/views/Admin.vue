<template>
    <div>
         <NavbarAdmin /> 
        <b-container class="mt-4" fluid>
            <b-table :busy="busy" bordered :fieds="fields" hover :items="items">

                 <template v-slot:cell(products)="data">
                    <h5>Id: {{data.item.id}}</h5>
                    <ul v-for="(product,index) in data.item.products" :key="index">
                        <li>Name: {{product.name}}</li>
                        <li>Price: {{product.price}}</li>
                        <li>Quantity: {{product.quantity}}</li>
                        <hr />
                    </ul>
                </template>

                <template v-slot:cell(total)="data">
                    <h2>$ {{data.item.total}}.00</h2>
                </template>


                    <b-button @click="deletesale(data.item.id)" block class="mt-4"
                        style="top:50%!important;" size="1g" variant="danger">
                        tikaricatica
                    </b-button>


                <template v-slot:table-busy>
                    <div class="text-center text-success my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Loading...</strong>
                    </div>
                </template>
            </b-table>
        </b-container> 
    </div>
</template>

<script>
import {db} from "@/firebase"
import NavbarAdmin from "@/components/NavbarAdmin"
export default {
    data(){
        return {
            data: "",
            busy: true,
            items: [],
            fields:[
                { key: "products", label: "Sales" },
                { key: "total", label: "Total"  },
                { key: "delete", label: "Delete" },                
            ]
        }
    },
    components:{
        NavbarAdmin
    },
    created(){
        db.collection("vue").onSnapshot(queySnapshot => {
            this.items = []
            this.busy = true
            // console.log(`1 `, queySnapshot)
            queySnapshot.forEach(doc => {   
                const doc2 = doc.data()
                doc2.id= doc.id
                console.log('2',doc2)
                this.items.push(doc2)
            })
            if(this.items.length){
                this.busy = false
            } else{
                this.busy = false
            }
        })
    },
    methods:{
        deletesale(id){
            db.collection("vue").doc(id).delete().then(function(){

            })
        }
    }
}
</script>
