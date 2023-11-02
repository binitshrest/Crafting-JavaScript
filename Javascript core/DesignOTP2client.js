function genOTP(){
    return 3123;
}

function sendOTPMessage(otp){
    console.log('Sending OTP...', otp);
}

function genAndSendOtp(gen, cb){
    const otp = gen()
    cb(otp);
}


// genAndSendOtp(genOTP, sendOTPMessage);
genAndSendOtp(() => 2145, (otp)=>console.log('Mailing', otp));