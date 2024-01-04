import React from 'react'

const Shipping = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-10 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <p className='text-left text-black py-4'>Breadcrumbs Section</p>
            <h2 className='text-left text-black underline underline-offset-1'>SHIPPING / RETURN / REFUND POLICY</h2>
            <div className='bg-white dark:bg-gray-900 py-2'>
                <h3 className='text-left text-black'><strong>Shipping Policy</strong></h3>
                <ul className="list-disc px-4 py-2">
                    <li className='text-justify'>or all confirmed orders received, the order will be dispatched in 2 to 3 business days. The delivery timeline may vary depending on the time required by courier partner.</li>
                    <li className='text-justify'>If any item from your order is Rs 799 or below, a standardized shipping fee of Rs. 50 will be levied for that item at the time of checkout. No shipping fee will be added for items above Rs. 799.</li>
                    <li className='text-justify'>Order once is shipped from our warehouse, the same cannot be cancelled. If you wish to still continue with cancellation, you may refuse accepting delivery when the courier partner comes.</li>
                    <li className='text-justify'>If you accept the delivery and are not satisfied with your order upon delivery, you can raise a Return request.</li>
                </ul>
            </div>
            <div className='bg-white dark:bg-gray-900 py-3'>
                <h3 className='text-left text-black'><strong>Return Policy</strong></h3>
                <ul className="list-disc px-4 py-2">
                    <li className='text-justify'>Within 15 days of receipt, only unused goods will be accepted for refund.</li>
                    <li className='text-justify'>SALE items, Bags and Accessories except Belts are not returnable, refundable, or replaceable.</li>
                    <li className='text-justify'>Items available for returns (and refunds) must be unused, intact, and in their original packaging (labels, tags, boxes, plastic wrap). We'll gladly repair an item if it's broken.</li>
                    <li className='text-justify'>To raise a return request, please log-in to the website and raise a return request from ‘My Orders’ section.</li>
                </ul>
            </div>
            <div className='bg-white dark:bg-gray-900 py-3'>
                <h3 className='text-left text-black'><strong>Refund Policy</strong></h3>
                <ul className="list-disc px-4 py-2">
                    <li className='text-justify'>In case, you have cancelled an order within two hours of placing it or before it has been moved to procurement - you will be issued a full refund within 3-5 business days of cancellation of order.</li>
                    <li className='text-justify'>If due to unavoidable circumstances, or situations beyond our control, your order is not processed, cannot be procured or is not shipped to you within a certain time, the order shall stand cancelled, and the entire amount will be refunded to you; no liability shall be incurred by the either side.</li>
                    <li className='text-justify'>Kaalani Shoes will refund the paid amount only if the order at delivery is damaged, faulty or if the order is wrong. </li>
                    <li className='text-justify'>No refund will be issued by Kaalani Shoes if the order has been delivered with the colour and size as selected by the customer while placing the order.</li>
                    <li className='text-justify'>In case your order amount comprised of shipping charges, the refund will be done excluding the shipping charges amount, i.e. Rs. 50.</li>
                    <li className='text-justify'>Once Kaalani Shoes has initiated a refund in accordance with the Returns Policy, the refund amount is expected to appear in the customer's account within the following timeframes:</li>
                    <li className='text-justify'>COD refunds take 5 to 7 business days to reflect in your bank account after the refund is initiated.</li>
                    <li className='text-justify'>Prepaid Refund takes 5 to 7 business days, depending on your bank partner, after the refund is initiated.</li>
                    <li className='text-justify'>Please note that Kaalani Shoes only initiates a refund after the returned item has been received and the condition check has been accepted. Therefore, the time of initiation of the refund may vary depending on the time required by the courier partner to return to the Kaalani delivery centre.</li>
                </ul>
            </div>
        </div>
    )
}

export default Shipping