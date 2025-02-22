import Razorpay from "razorpay";

export const cardDetail = async (req, res, next) => {
    try {
        const instance = new Razorpay({ 
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const { id } = req.body;
        const order = await instance.orders.fetch(id)
        if(!order) return res.status(500).send("something Occured");
        console.log(order);
        res.status(200).json({success: true , data: order});
    } catch (error) {
        console.log(error);
    }
}


export const orderCreate = async (req, res, next) =>{
    try {
        const instance = new Razorpay({ 
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        
        const {order_id, amount, payment_capture, currency} = req.body;
        console.log(req.body);
        const options = {
            amount: amount,
            currency: currency,
            receipt: order_id,
            payment_capture: payment_capture
        }
        const order = await instance.orders.create(options);
        if(!order) return res.status(500).send("something Occured");

        res.status(200).json({success: true , data: order});
    } catch (error) {
        console.log(error);
    }
}

