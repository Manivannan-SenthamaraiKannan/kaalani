import React from 'react'

const Terms = () => {
    return (
        <div class='bg-white  py-10 mx-auto max-w-screen-xl lg:py-16 lg:px-12'>
            {/* <p className='text-left text-black py-4'>Breadcrumbs Section</p> */}
            <nav class="flex py-4" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="/" class="inline-flex items-center text-sm font-medium text-black-700 hover:text-blue-600 dark:text-black-400 dark:hover:text-red-400">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="/term" class="ms-1 text-sm font-medium text-black-700 hover:text-blue-600 md:ms-2 dark:text-black-400 dark:hover:text-red-400">Terms & Conditions</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 className='text-left text-black underline underline-offset-1'><strong>Terms and Conditions</strong></h2>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>1. Use of Website</strong></h3>
                <p className="text-justify text-black px-4 py-2">This website, www.mochishoes.com
                    is operated for your personal use and information. The use of this website is subject to the following terms.
                    By accessing and browsing this website, you unconditionally accept, without limitation or qualification, these terms.
                    This website is directed for use only by adults. You represent that you possess the legal right and ability to create
                    binding obligations. MOCHI reserves the right to refuse service, or cancel orders in its sole discretion.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>2. Privacy Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">TThe privacy practices of MOCHI are explained in our Privacy Policy,
                    which governs and regulates your visit to this website. Use of this website implies that you have read the Privacy Policy
                    and agree to be bound by and unconditionally accept its terms and conditions. You also consent to the use of your personal
                    information by MOCHI in accordance with the Privacy Policy, as may be amended from time to time.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>3. Product Information</strong></h3>
                <p className="text-justify text-black px-4 py-2">MOCHI has made every effort to ensure that the products are fairly described,
                    that the product information is correct, and that the colours and get up of our products are displayed as accurately as possible.
                    However, as the actual colours or get up you see will vary with the quality of your monitor or because of picture quality or for
                    any other reason, we cannot guarantee that your display will accurately reflect the colour or get up or any other description of
                    the product requested on delivery. MOCHI does not represent and warrant that product descriptions, photograph, get up or other
                    description of the product or the content of this site are accurate, complete or error-free.</p>
                <p className="text-justify text-black px-4 py-2">If, on receiving ordered goods, you have any cause for dissatisfaction about the
                    description of the product; your sole remedy is to return the product in unused condition and without any damage of whatsoever nature,
                    along with the invoice.</p>
                <p className="text-justify text-black px-4 py-2">We may establish general practices and limits concerning the use of the website and
                    the services we provide, including limits to the size and number of any messages and contents that have been sent, or the duration
                    that any messages and contents may be stored on our website. We are entitled to amend or delete any material from our website at any time,
                    and we will not be liable for amending or deleting or not storing any material or contents that you may transmit to us.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>4. Limitation of Liability</strong></h3>
                <p className="text-justify text-black px-4 py-2">MOCHI shall not be liable for any damage, either direct or indirect, incidental or consequential,
                    for use of or inability to use material, products or services of any kind that is offered or to provide indemnity or any other remedy to you or
                    any third party. MOCHI make every effort to ensure that this website is free from defects or viruses. It is your responsibility to ensure that
                    you use the correct equipment when using the website, and to protect from anything that may damage it and MOCHI shall not be liable for any damage,
                    either direct or indirect, incidental or consequential, by use of this website to you or your computer or any equipment’s, software' used by you.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>5. Exclusion of Warranty</strong></h3>
                <p className="text-justify text-black px-4 py-2">MOCHI does not warrant or represent that this website will be uninterrupted or error free or that any
                    information, data, content, software or other material accessible through this website will be free from bugs, viruses, worms, trojan horses or other
                    harmful components. Information on this website is provided to you "as is", "with all faults" and without warranties of any kind whether express or implied.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>6. Copyright and Trademark</strong></h3>
                <p className="text-justify text-black px-4 py-2">Materials on this website, including texts, images, illustrations, software, audio clips and video clips,
                    are owned and or provided by MOCHI. The material on this website is protected by the Copyright Act (or the equivalent thereof) and by virtue of the
                    applicable Intellectual Property Laws and international treaties. Consequently, the material on this website should not be copied, reproduced, republished,
                    downloaded, posted, transmitted, distributed or modified, in whole or in part in any form whatsoever, directly or indirectly, including but not limited to
                    text, audio or video, text, photographs, images, designs, get up etc. The trademarks/trade name MOCHI, logos and service marks Mochi (collectively, "Marks")
                    displayed on this website are the registered or unregistered Marks of MOCHI, the other marks on the web site and logos and service marks are the property of
                    their respective owners and should not be used in any manner, directly or indirectly. Nothing in this website is to be interpreted as conferring a right to
                    use the Marks or the material protected by the Copyright Act (or the equivalent thereof).</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>7. Electronic Communication</strong></h3>
                <p className="text-justify text-black px-4 py-2">When you visit this website, or send e-mails to us, you are communicating with us electronically.
                    You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this website.
                    You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement
                    that such communications be in writing.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>8. Surveillance</strong></h3>
                <p className="text-justify text-black px-4 py-2">MOCHI may monitor the access to its website and other activities in relation to its website and
                    may intervene in this regard. However, MOCHI makes no representation and gives no warranty to that effect. You consent to such surveillance and
                    intervention, if MOCHI ever decides to do it.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>9. Confidentiality</strong></h3>
                <p className="text-justify text-black px-4 py-2">You acknowledge that information or material which you provide electronically through your access
                    to or usage of this website is not confidential or proprietary, except as may be required under applicable law or pursuant to the privacy policy
                    of MOCHI. You also acknowledge that unprotected e-mail communication over the Internet is subject to possible interception, alteration or loss.
                    You represent and warrant that the information or material which you provide electronically to MOCHI by accessing or using this website does not
                    infringe the rights of any other person or entity. You consent to MOCHI using that information or material, in whole or in part by any means whatsoever,
                    including reproducing, retransmitting or publishing this information or material or ideas, concepts or other information contained therein for the
                    commercial purposes of MOCHI. You also consent to the disclosure of your identity, in accordance with the Privacy Policy of MOCHI.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>10. Harmful Information / Material</strong></h3>
                <p className="text-justify text-black px-4 py-2">You agree not to introduce into or through this website any information or materials which may be
                    harmful to others. You agree not to include, knowingly or otherwise, any error or defect in material or information which may, be a libel, slander,
                    defamation or obscenity, or promote hatred or otherwise give rise to a criminal offence or civil liability on the part of any person or entity.</p>
            </div>

        </div>
    )
}

export default Terms