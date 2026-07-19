"use client";

import { Option } from '@/types/types'
import { Wallet } from 'lucide-react'
import React, { useState } from 'react'
import Dropdown from '../ui/base/Dropdown';
import FormInput from '../ui/Upload_Project/FormInput';

const PAYMENT_METHOD:Option[] = [
    {
        label:"Bank Transfer",
        value:"bank"
    },
    {
        label:"UPI Transfer",
        value:"upi"
    }
] 
const PaymentDetails = () => {
    const [paymentMethod,setPaymentmethod] = useState('bank')
    const isBank = paymentMethod == 'bank'

  return (
    <>
          <section className="w-full h-auto p-5 space-y-2  bg-white shadow-lg shadow-[#00000034] rounded-2xl">
        <header className="w-full flex items-center gap-3">
            <aside className="flex items-center justify-center p-3 bg-[#22C55E] rounded-lg">
                <Wallet className='w-8 h-8 text-white'/>
            </aside>
            <div className="w-full">
                <h2 className="text-2xl font-semibold text-[#161D16] ">
                    Payment Details
                </h2>
                <p className="text-sm text-[#3D4A3D] ">
                    These details are used to receive payments for your sold projects.
                </p>
            </div>
        </header>
        <div className="w-full">
            <Dropdown
                name='Preferred Payment Method'
                option={PAYMENT_METHOD}
                value={paymentMethod}
                onChange={setPaymentmethod} />
        </div>

        {
            isBank && (
                <div className="w-full  grid grid-cols-2 gap-4 ">
                    <FormInput
                        type='text'
                        label='Account Holder Name'
                        placeholder='Full legal name' />
                    <FormInput
                        type='text'
                        label='Bank Name'
                        placeholder='e.g. HDFC Bank' />
                    <FormInput
                        label='Account Number'
                        placeholder='••••••••••••' />
                    <FormInput
                        label='IFSC Code'
                        placeholder='IFSC0001234' />
                </div>
            )
        }
        {
            !isBank && (
                <div className="w-full space-y-1 ">
                    <FormInput
                        type='text'
                        label='Enter your UPI ID'
                        placeholder='UPI ID' />
                    <FormInput
                        type='text'
                        label='Phone Number'
                        placeholder='0000000000' />
                </div>
            )
        }
    </section>
    </>
  )
}

export default PaymentDetails