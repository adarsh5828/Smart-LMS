import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import CheckoutForm from '../components/layout/course/checkoutForm.jsx';

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISH_KEY;
const stripePromise = loadStripe(stripeKey);

function checkoutPage() {
    const amount = 899;
  return (
    <div>
      <h1>Complete your Order</h1>
      <Elements stripe = {stripePromise} options = {{clientSecret: 'Constant Secret'}}>
     <CheckoutForm amount = {amount}></CheckoutForm>
      </Elements>
    </div>
  )
}

export default checkoutPage;
