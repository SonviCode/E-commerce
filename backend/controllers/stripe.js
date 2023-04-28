const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2022-08-01",
});

exports.stripeConfig = (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLIC_KEY,
  });
};

exports.createPayement = async (req, res) => {
  const formatAmount = Number(req.body.amount.toString().replace(".", ""));

  console.log(req.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: formatAmount,
      receipt_email: req.body.userEmail,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};

exports.getPayement = async (req, res) => {
  console.log(req.params);

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(req.params.id);

    console.log(paymentIntent);

    // Send PaymentIntent details to client
    res.send({
      paymentIntent,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};
