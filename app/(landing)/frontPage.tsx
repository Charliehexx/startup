
'use client'
import React, { useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"


const FrontPage = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const handleClick = () => {

        setShowPopUp(true)
    }
    return (
        <div>

        </div>
    )
}

export default FrontPage;
