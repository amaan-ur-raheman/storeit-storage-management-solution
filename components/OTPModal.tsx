"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const OTPModal = ({
    accountId,
    email,
}: {
    accountId: string;
    email: string;
}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Call API to verify OTP
            const sessionId = await verifySecret({ accountId, password });

            if (sessionId) router.push("/")
        } catch (error) {
            console.error("Failed to verify OTP.");
        }

        setIsLoading(false);
    };

    const handleResentOtp = async () => {
        // Call API to resend OTP
        await sendEmailOTP({ email });
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="shad-alert-dialog">
                <AlertDialogHeader className="relative flex justify-center">
                    <AlertDialogTitle className="h2 text-center">
                        Enter your OTP
                        <Image
                            src="/assets/icons/close-dark.svg"
                            alt="Close"
                            width={20}
                            height={20}
                            onClick={() => setIsOpen(false)}
                            className="otp-close-button"
                        />
                    </AlertDialogTitle>
                    <AlertDialogDescription className="subtitle-2 text-center text-light-100">
                        We&apos;ve have sent a code{" "}
                        <span className="pl-1 text-brand">{email}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <InputOTP maxLength={6} value={password} onChange={setPassword}>
                    <InputOTPGroup className="shad-otp">
                        <InputOTPSlot index={0} className="shad-otp-slot" />
                        <InputOTPSlot index={1} className="shad-otp-slot" />
                        <InputOTPSlot index={2} className="shad-otp-slot" />
                        <InputOTPSlot index={3} className="shad-otp-slot" />
                        <InputOTPSlot index={4} className="shad-otp-slot" />
                        <InputOTPSlot index={5} className="shad-otp-slot" />
                    </InputOTPGroup>
                </InputOTP>

                <AlertDialogFooter>
                    <div className="flex w-full flex-col gap-4">
                        <AlertDialogAction
                            onClick={handleSubmit}
                            className="shad-submit-btn h-12"
                            type="button"
                        >
                            Submit
                            {isLoading && (
                                <Image
                                    src="/assets/icons/loader.svg"
                                    alt="loader"
                                    className="ml-2 animate-spin"
                                    width={24}
                                    height={24}
                                />
                            )}
                        </AlertDialogAction>

                        <div className="subtitle-2 mt-2 text-center text-light-100">
                            Did&apos;nt get the code?
                            <Button type="button" variant="link" className="pl-1 text-brand" onClick={handleResentOtp}>
                                Click to resend
                            </Button>
                        </div>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default OTPModal;
