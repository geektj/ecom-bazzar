// This is your test secret API key.
// const stripe = require('stripe')('sk_test_51NqJu2SBL7Z2HRULuOfLKpF6ex0rqeMMhDthwORc4gZlRc0ilAonaG8ZhkkhjEFFeC3XB018lhQDUQSiM28gtRhX00CdInsIks');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));







const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.json());

const port = process.env.PORT;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// // console.log("__stripe key", Stripe);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// checkout api

app.post("/create-checkout-session", async(req,res) => {
    const {products} = req.body;
    // console.log(product);
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quanity
    }))

    // const orderId = ''

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/sucess",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.json({id:session.id})
})

// app.get("/",(req,res) => {
//     res.send("hello world");
// })

// app.post("/pay",async(req,res) => {
//     console.log(req.body.token);
//     await Stripe.charges.create({
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: "usd"
//     })
// })

console.log("hello");

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})