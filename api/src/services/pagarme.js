const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.pagar.me/1',
});

const api_key = require('../data/keys.json').api_key;

module.exports = {
    createRecipient: async (name) => {
        try {
            const response = await api.post('/recipients', {
                api_key,   
                bank_account: {
                    bank_code: "341",
                    agencia: "0932",
                    agencia_dv: "5",
                    conta: "58054",
                    type: "conta_corrente",
                    conta_dv: "1",
                    document_number: "26268738888",
                    legal_name: name,
                }, 
                    register_information: {
                        type: "corporation",
                        document_number: "26268738888",
                        company_name: name,
                        email: "pedgree@gmail.com",
                        phone_numbers: [
                            {
                                ddd: "24",
                                number: "81174515",
                                type: "mobile"
                        }
                        ],
                        managing_partners: [
                            {
                                type: "individual",
                                document_number: "98745632",
                                email: "some@gmail.com",
                                name: "Someone"
                             },
                        ],
                    },       
                });
                
                return { error: false, data: response.data };
             } catch (err) {
            return { error: true, message: err.message };
        }
    },
};