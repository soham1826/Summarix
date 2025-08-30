import Stripe from "stripe"
import { getDbconnection } from "./db"


export async function handleSubscriptionDeleted({subscriptionId , stripe}:{
    subscriptionId:string,
    stripe:Stripe
}){
   
    try {
        const subscription =await stripe.subscriptions.retrieve(subscriptionId);

        const sql = await getDbconnection();
        await sql `UPDATE users SET status = 'cancelled' WHERE customer_id = ${subscription.customer}`
        console.log("subscription deleted",subscriptionId)
    } catch (error) {
        console.error("Error Deleting the subsription", error)        
    }
}


export async function handleCheckoutSessionsCompleted({session, stripe}:{
    session:Stripe.Checkout.Session,
    stripe:Stripe
}) {
    console.log("Checkout session completed",session)
    const sql = await getDbconnection();
    const customerId = session.customer as string;
    const customer = await stripe.customers.retrieve(customerId)
    const priceId = session.line_items?.data[0]?.price?.id

    if('email' in customer && priceId){
    const{email , name} = customer;

    await createOrUpdateUser({
        sql,
        email:email as string,
        fullName:name as string,
        customerId,
        priceId:priceId as string,
        status:'active',

    });

    await createPayment({
        sql,
        session,
        priceId:priceId as string ,
        userEmail:email as string,
    })
    }

    
    
}


async function createOrUpdateUser({sql,
    email, fullName , customerId, priceId ,status 
}:{
    sql:any
    email:string;
    fullName:string;
    customerId:string;
    priceId:string;
    status:string
}){
    try {
        
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;

        if(user.length == 0){
            await sql `INSERT INTO users (email , full_name , customer_id, price_id , status) VALUES (${email},${fullName},${customerId},${priceId},${status}) `
        }
    } catch (error) {
        console.error("Error updating or creating the user",error)
    }
}

async function createPayment({sql,session,priceId ,userEmail}:{   sql:any,
    session:Stripe.Checkout.Session,
    priceId:string ,
    userEmail:string
}){
    try {
        const {amount_total , id ,status} = session
        await sql`INSERT INTO payments (amount , status , stripe_payment_id , price_id , user_email) VALUES (${amount_total},${status},${id},${priceId},${userEmail}) `
    } catch (error) {
        console.error("Error creating payment", error)
    }
}

