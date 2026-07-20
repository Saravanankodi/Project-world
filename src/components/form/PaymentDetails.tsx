"use client";

import { Option, Profile, UserProfile } from '@/types/types'
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
const PaymentDetails = ({profile,setProfile}:Profile) => {
    const [paymentMethod,setPaymentmethod] = useState('bank')
    const isBank = profile.payment.method == 'bank'

    const updatePayment = (
        field: keyof UserProfile["payment"],
        value: string
        ) => {
        setProfile((prev:any) => ({
            ...prev,
            payment: {
            ...prev.payment,
            [field]: value,
            },
        }));
    };

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
                value={profile.payment.method}
                onChange={(e) => updatePayment("method", e as 'bank' | 'upi')} />
        </div>

        {
            isBank && (
                <div className="w-full  grid grid-cols-2 gap-4 ">
                    <FormInput
                        type='text'
                        label='Account Holder Name'
                        placeholder='Full legal name'
                        value={profile.payment.accountHolder}
                        onChange={(e)=>{updatePayment('accountHolder', e.target.value)}}
                         />
                    <FormInput
                        type='text'
                        label='Bank Name'
                        placeholder='e.g. HDFC Bank'
                        value={profile.payment.bankName}
                        onChange={(e)=>{updatePayment('bankName', e.target.value)}}
                         />
                    <FormInput
                        label='Account Number'
                        placeholder='••••••••••••' 
                        value={profile.payment.accountNumber}
                        onChange={(e)=>{updatePayment('accountNumber', e.target.value)}}
                        />
                    <FormInput
                        label='IFSC Code'
                        placeholder='IFSC0001234'
                        value={profile.payment.ifsc}
                        onChange={(e)=>{updatePayment('ifsc', e.target.value)}}
                        />
                </div>
            )
        }
        {
            !isBank && (
                <div className="w-full space-y-1 ">
                    <FormInput
                        type='text'
                        label='Enter your UPI ID'
                        placeholder='UPI ID' 
                        value={profile.payment.upiId}
                        onChange={(e)=>{updatePayment('upiId', e.target.value)}}
                        />
                    <FormInput
                        type='text'
                        label='Phone Number'
                        placeholder='0000000000'
                        value={profile.payment.phoneNumber}
                        onChange={(e)=>{updatePayment('phoneNumber', e.target.value)}}
                        />
                </div>
            )
        }
    </section>
    </>
  )
}

export default PaymentDetails