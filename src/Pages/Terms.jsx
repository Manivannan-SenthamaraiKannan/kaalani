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
                <p className="text-justify text-black px-4 py-2">This website, www.Kaalanishoes.com
                    is operated for your personal use and information. The use of this website is subject to the following terms.
                    By accessing and browsing this website, you unconditionally accept, without limitation or qualification, these terms.
                    This website is directed for use only by adults. You represent that you possess the legal right and ability to create
                    binding obligations. Kaalani reserves the right to refuse service, or cancel orders in its sole discretion.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>2. Privacy Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">TThe privacy practices of Kaalani are explained in our Privacy Policy,
                    which governs and regulates your visit to this website. Use of this website implies that you have read the Privacy Policy
                    and agree to be bound by and unconditionally accept its terms and conditions. You also consent to the use of your personal
                    information by Kaalani in accordance with the Privacy Policy, as may be amended from time to time.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>3. Product Information</strong></h3>
                <p className="text-justify text-black px-4 py-2">Kaalani has made every effort to ensure that the products are fairly described,
                    that the product information is correct, and that the colours and get up of our products are displayed as accurately as possible.
                    However, as the actual colours or get up you see will vary with the quality of your monitor or because of picture quality or for
                    any other reason, we cannot guarantee that your display will accurately reflect the colour or get up or any other description of
                    the product requested on delivery. Kaalani does not represent and warrant that product descriptions, photograph, get up or other
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
                <p className="text-justify text-black px-4 py-2">Kaalani shall not be liable for any damage, either direct or indirect, incidental or consequential,
                    for use of or inability to use material, products or services of any kind that is offered or to provide indemnity or any other remedy to you or
                    any third party. Kaalani make every effort to ensure that this website is free from defects or viruses. It is your responsibility to ensure that
                    you use the correct equipment when using the website, and to protect from anything that may damage it and Kaalani shall not be liable for any damage,
                    either direct or indirect, incidental or consequential, by use of this website to you or your computer or any equipment’s, software' used by you.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>5. Exclusion of Warranty</strong></h3>
                <p className="text-justify text-black px-4 py-2">Kaalani does not warrant or represent that this website will be uninterrupted or error free or that any
                    information, data, content, software or other material accessible through this website will be free from bugs, viruses, worms, trojan horses or other
                    harmful components. Information on this website is provided to you "as is", "with all faults" and without warranties of any kind whether express or implied.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>6. Copyright and Trademark</strong></h3>
                <p className="text-justify text-black px-4 py-2">Materials on this website, including texts, images, illustrations, software, audio clips and video clips,
                    are owned and or provided by Kaalani. The material on this website is protected by the Copyright Act (or the equivalent thereof) and by virtue of the
                    applicable Intellectual Property Laws and international treaties. Consequently, the material on this website should not be copied, reproduced, republished,
                    downloaded, posted, transmitted, distributed or modified, in whole or in part in any form whatsoever, directly or indirectly, including but not limited to
                    text, audio or video, text, photographs, images, designs, get up etc. The trademarks/trade name Kaalani, logos and service marks Kaalani (collectively, "Marks")
                    displayed on this website are the registered or unregistered Marks of Kaalani, the other marks on the web site and logos and service marks are the property of
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
                <p className="text-justify text-black px-4 py-2">Kaalani may monitor the access to its website and other activities in relation to its website and
                    may intervene in this regard. However, Kaalani makes no representation and gives no warranty to that effect. You consent to such surveillance and
                    intervention, if Kaalani ever decides to do it.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>9. Confidentiality</strong></h3>
                <p className="text-justify text-black px-4 py-2">You acknowledge that information or material which you provide electronically through your access
                    to or usage of this website is not confidential or proprietary, except as may be required under applicable law or pursuant to the privacy policy
                    of Kaalani. You also acknowledge that unprotected e-mail communication over the Internet is subject to possible interception, alteration or loss.
                    You represent and warrant that the information or material which you provide electronically to Kaalani by accessing or using this website does not
                    infringe the rights of any other person or entity. You consent to Kaalani using that information or material, in whole or in part by any means whatsoever,
                    including reproducing, retransmitting or publishing this information or material or ideas, concepts or other information contained therein for the
                    commercial purposes of Kaalani. You also consent to the disclosure of your identity, in accordance with the Privacy Policy of Kaalani.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>10. Harmful Information / Material</strong></h3>
                <p className="text-justify text-black px-4 py-2">You agree not to introduce into or through this website any information or materials which may be
                    harmful to others. You agree not to include, knowingly or otherwise, any error or defect in material or information which may, be a libel, slander,
                    defamation or obscenity, or promote hatred or otherwise give rise to a criminal offence or civil liability on the part of any person or entity.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>11. Links</strong></h3>
                <p className="text-justify text-black px-4 py-2">Links and references to other websites are provided to you as a convenience only. Kaalani has not
                    reviewed and does not expressly or implicitly endorse other websites or any information or material, or the accessibility thereof, via such
                    links, and does not assume any responsibility for any such other websites, information or material posted thereon, or products or services
                    offered thereon. You may not create links from other websites to this website, except if expressly permitted by Kaalani. </p>
                <p className='text-justify text-black px-4 py-2'>Kaalani does not represent or warrant that the information or material, including the downloadable
                    software, accessed from or through this website will be uninterrupted or free of errors, defects, viruses or other harmful components, or that
                    any such problems which are discovered will be corrected.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>12. Reserve of Rights</strong></h3>
                <p className="text-justify text-black px-4 py-2">All rights not expressly granted in these terms are reserved to Kaalani. Nothing contained in
                    these terms shall be construed as conferring by implication, estoppel or otherwise any license or right under any copyright, patent, trademark
                    or other intellectual property right of Kaalani or any other person or to you. </p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>13. Dispute Resolutions by Arbitration</strong></h3>
                <p className="text-justify text-black px-4 py-2">Any dispute, or claim between us arising out of any use of this website, including the applicability
                    or scope of this arbitration clause shall be referred to and finally resolved by a Sole Arbitrator appointed by Kaalani, to the exclusion of courts
                    of law, in accordance with the Indian Arbitration Act, 1996. However, before you submit a claim for arbitration, you must first contact customer
                    service representative at Kaalani and give him an opportunity to resolve the dispute. Similarly, before Kaalani takes a dispute to arbitration, it must
                    first attempt to resolve it by contacting you. If the dispute cannot be satisfactorily resolved within sixty (60) days from the date you may inform
                    Kaalani to appoint Arbitrator to resolve the dispute and Kaalani shall within 15 days from the receipt of such intimation shall appoint the Sole Arbitrator
                    to resolve the dispute. The venue of the Arbitration shall be at Mumbai and the language of the Arbitration shall be English and the applicable Law shall
                    be the Laws of India. </p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>14. Governing Law</strong></h3>
                <p className="text-justify text-black px-4 py-2">This site is controlled and operated by Kaalani from Mumbai, India and these terms, and any transaction
                    conducted on or from it shall be governed by the applicable Indian laws without reference to principles of conflict of laws. Products sold or delivered
                    abroad through this website shall be subject to export control laws and regulations of India.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>15. Cookies</strong></h3>
                <p className="text-justify text-black px-4 py-2">TA cookie is a short string of data that lets this website remember who you are, serving much like a unique membership ID.
                    We use cookies to remember keys to some of your search preferences and other site preferences. So, we may provide a more convenient experience during your next visit
                    to this website. When you leave our site, we terminate our interaction with the cookie. The cookie stays on your computer and you can delete it any time you like.
                    However, in that case you have to login again and re-enter your preferences, if any.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>15. No Waiver</strong></h3>
                <p className="text-justify text-black px-4 py-2">The failure of Kaalani to enforce any provisions of these terms or to respond to a breach by you or any third
                    party of these terms shall not in any way waive the right of Kaalani to subsequently enforce any of the terms and conditions contained herein or to act with
                    respect to similar breaches.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>16. Changes to Terms / Severability</strong></h3>
                <p className="text-justify text-black px-4 py-2">Kaalani may modify, update or otherwise change the terms applicable to this website from time to time.
                    Following the posting of such change, your continued use of this site will constitute your acceptance of the terms, as modified. If any one of these
                    terms shall be deemed invalid, void, or for any reason unenforceable, such terms shall be deemed severable and shall not affect the validity and
                    enforceability of remaining terms.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>17. Entire Agreement</strong></h3>
                <p className="text-justify text-black px-4 py-2">These terms or conditions incorporated or referred to herein constitute the entire agreement amongst
                    us with respect to the use of this website and any transaction conducted on or from this website and its contents, and supersede any prior understanding
                    or agreement (whether electronic, oral or written).
                </p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>18. Termination</strong></h3>
                <p className="text-justify text-black px-4 py-2">Kaalani reserves the right, at its sole discretion, to terminate your access to all or any part of this site,
                    with or without notice.
                    Kaalani reserves the right to terminate/temporarily deactivate any promotions without prior notice.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>19. Headings</strong></h3>
                <p className="text-justify text-black px-4 py-2">The headings used herein are inserted for convenience of reference only and do not affect the construction
                    or interpretation of the terms and conditions herein.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>20. SMS or Email Updates</strong></h3>
                <p className="text-justify text-black px-4 py-2">Kaalani Shoes has the right to use the customer contact information for their own marketing purposes. We
                    may send regular SMS and Email updates to the registered mobile numbers and email Ids with us.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>21. Return and Shipping Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">The return /refund policy is customer-friendly, allowing you to feel more at ease after making an online purchase.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>22. Shipping Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">For all orders once received in 2 to 3 business days, the delivery timeline may vary depending on the
                    time required by courier partner. For all orders priced at Rs. 600 or below, there is a fixed shipping fee of Rs. 50 which will get applied on the
                    checkout page.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>23. Return Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">Within 15 days of receipt, only unused goods will be accepted for refund. SALE items are not returnable,
                    refundable, or replaceable.Items available for returns (and refunds) must be unused, intact, and in their original packaging (labels, tags, boxes,
                    plastic wrap). Please keep in mind the goods marked as "final sale" cannot be returned. We'll gladly repair an item if it's broken or doesn't fit the
                    product description. If we don't have a replacement in stock, we'll give you a full refund, excluding the shipping costs you paid when you purchased it.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>24. Refund Policy</strong></h3>
                <p className="text-justify text-black px-4 py-2">Once Kaalani Shoes has initiated a refund in accordance with the Returns Policy, the refund amount is
                    expected to appear in the customer's account within the following timeframes:</p>
                <p className="text-justify text-black px-4 py-2">COD refunds take 5 to 7 business days to reflect in your bank account after the refund is initiated.</p>
                <p className="text-justify text-black px-4 py-2">Prepaid Refund takes 5 to 7 business days, depending on your bank partner, after the refund is initiated.</p>
                <p className="text-justify text-black px-4 py-2">Please note that Kaalani Shoes only initiates a refund after the returned item has been received
                    and the condition check has been accepted. Therefore, the time of initiation of the refund may vary depending on the time required by the
                    courier partner to return to the Kaalani delivery center.</p>
            </div>
            <div className='bg-white py-2'>
                <h3 className='text-left text-black'><strong>25. Redemption Clauses</strong></h3>
                <p className="text-justify text-black px-4 py-2">The redemption of any promotional Gift Voucher, Offers, Discount, or any such benefits provided under
                    loyalty program by Kaalani Shoes or by any of its’ affiliates is redeemable only once as per the given terms. These promotional benefits are only
                    one-time use and will not be reversed fully or partially in case the customer makes full/partial exchange, return, or refund of all/few invoice items.
                    Kaalani Shoes holds all the rights to accept, reject, modify, or cancel this benefit without any prior intimation to the customers.</p>

            </div>
        </div>
    )
}

export default Terms