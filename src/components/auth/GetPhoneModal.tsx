import React, { useState } from 'react'
import Logo from '../shared/Logo'
import OtpInput from 'react-otp-input';


function GetPhoneModal() {

    const [getPhone, setGetPhone] = useState<boolean>(true);
    const [otp, setOtp] = useState<string>('');

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box space-y-4 bg-[#FCFBF6]">
                <div className="flex justify-between items-center">
                    <Logo
                        width={60}
                        height={60}
                    />
                </div>
                {
                    !getPhone ?
                        <>
                            <div className="flex flex-col space-y-4">
                                <p>ورود به حساب کاربری</p>
                                <div className="">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text-alt">شماره موبایل</span>
                                        </label>
                                        <input type="text" placeholder="شماره تلفن خود را وارد کنید" className="input input-bordered w-full" />
                                        <label className="label">
                                            <span className="label-text-alt text-red-600">متن ارور </span>
                                        </label>
                                    </div>
                                    <button className="btn btn-primary bg-[#6E3FF3] w-full">
                                        دریافت کد تایید
                                    </button>
                                </div>
                            </div>
                        </> :
                        <>
                            <p>ورود به حساب کاربری</p>
                            <div className="">
                                <label className="label">
                                    <span className="label-text-alt">کد تایید</span>
                                </label>
                                <div className="rounded-full p-2 w-full flex justify-center items-center">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderSeparator={<span></span>}
                                        renderInput={(props) => <input {...props} />}
                                        containerStyle={{
                                            width: '100%',
                                            direction: 'ltr'
                                        }}
                                        inputStyle={{
                                            backgroundColor: '#FCFBF6',
                                            borderBottom: '1px solid #CCCCCC',
                                            width: '20%',
                                            margin: 2,
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary bg-[#6E3FF3] w-full">
                                اعتبار سنجی کد تایید
                            </button>
                        </>
                }

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default GetPhoneModal