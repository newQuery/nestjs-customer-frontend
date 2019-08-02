import { server } from "../../helper";
import axios from "axios";

export default {
    data() {
        return {
            customers: []
        };
    },
    created() {
        this.fetchCustomers();
    },
    methods: {
        fetchCustomers() {
            axios
                .get(`${server.baseURL}/customer/customers`)
                .then(data => (this.customers = data.data));
        },
        deleteCustomer(id) {
            axios
                .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
                .then(data => {
                    window.location.reload();
                });
        }
    }
};
