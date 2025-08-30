import { handleCheckoutSessionsCompleted , handleSubscriptionDeleted } from "@/lib/payments";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const POST = async(req:NextRequest)=>{
    const payload = await req.text();
    const sig = req.headers.get('stripe-signature')

    let event;

    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

    try{
        event = stripe.webhooks.constructEvent(payload,sig!,endpointSecret)

        switch(event.type){
            case 'checkout.session.completed':
                const sessionId= event.data.object.id;
                const session =await stripe.checkout.sessions.retrieve(sessionId,{
                    expand:['line_items']
                })
                await handleCheckoutSessionsCompleted({session , stripe})


                break;
            case 'customer.subscription.deleted':
                const subscription = event.data.object;
                const subscriptionId = event.data.object.id;
                await handleSubscriptionDeleted({subscriptionId ,stripe})
                console.log(subscription);
                break;
                default:
                    console.log(`unhandled event ${event.type}`)
        }
    }catch(err){
        return NextResponse.json({
            error:'Failed to trigger webhook', err},
            {status:400
        })
    }

    return NextResponse.json({status:'success'})
}