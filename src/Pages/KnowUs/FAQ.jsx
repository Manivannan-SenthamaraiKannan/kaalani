import React from 'react'

const FAQ = () => {
    return (
        <div className="bg-white  py-10 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <nav className="flex py-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-sm font-medium text-black-700 hover:text-blue-600 dark:text-black-400 dark:hover:text-red-400">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="/faq" className="ms-1 text-sm font-medium text-black-700 hover:text-blue-600 md:ms-2 dark:text-black-400 dark:hover:text-red-400">FAQ's</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 className='text-left text-black underline underline-offset-1'><strong>FAQ's</strong></h2>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>Signup/Login</strong></h3>
                <p className="text-justify text-black px-4 py-2">How do I create an account on?</p>
                <p className="text-justify text-black px-4 py-2">What data do I need to provide Kaalani to sign up?</p>
                <p className="text-justify text-black px-4 py-2">How do I login on Kaalani?</p>
                <p className="text-justify text-black px-4 py-2">What if I do not receive my OTP?</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>Placing order, tracking, delivery</strong></h3>
                <p className="text-justify text-black px-4 py-2">How do I place an order on Kaalani?</p>
                <p className="text-justify text-black px-4 py-2">How can I figure out the correct size for me?</p>
                <p className="text-justify text-black px-4 py-2">Do I need to create an account to place an order?</p>
                <p className="text-justify text-black px-4 py-2">Is there a limit on my orders?</p>
                <p className="text-justify text-black px-4 py-2">What is Kaalani's Shipping Policy?</p>
                <p className="text-justify text-black px-4 py-2">How do I check the status of my order?</p>
                <p className="text-justify text-black px-4 py-2">How can I check if Kaalani delivers to my PIN Code?</p>
                <p className="text-justify text-black px-4 py-2">Delivery is not available on my address, what should I do?</p>
                <p className="text-justify text-black px-4 py-2">How are orders placed on Kaalani delivered to me?</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>Payments</strong></h3>
                <p className="text-justify text-black px-4 py-2">How do I create an account on?</p>
                <p className="text-justify text-black px-4 py-2">What data do I need to provide Kaalani to sign up?</p>
                <p className="text-justify text-black px-4 py-2">What should I do if my payment fails?</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>Cancellation, Return, Replace</strong></h3>
                <p className="text-justify text-black px-4 py-2">What is Kaalani's Cancellation Policy?</p>
                <p className="text-justify text-black px-4 py-2">Can I modify the shipping address of my order after it has been placed?</p>
                <p className="text-justify text-black px-4 py-2">How do I cancel my Order?</p>
                <p className="text-justify text-black px-4 py-2">I just cancelled my order. When will I receive my refund?</p>
                <p className="text-justify text-black px-4 py-2">What is Kaalani's Return Policy? How does it work?</p>
                <p className="text-justify text-black px-4 py-2">How do I return a product on Kaalani</p>
            </div>
        </div>
    )
}

export default FAQ