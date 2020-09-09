import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HLYA4FEhOV0ugKAsGLkOclwxErw1S9uV7QHL27qCZ5etByC5qyxHhXzA04FCaXJBPL9V8q9XfmMbh1Rc5R0N7WJ00Ck4UU47M';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='ZARA Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/PT0.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;