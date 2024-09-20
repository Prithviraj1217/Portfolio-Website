import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const user = {
        name: "Prithviraj",
        email: ""
    }
    return (
        <div>
            <SectionTitle title="Contact" />

            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    {Object.keys(user).map((key) => (
                        <h1 className="ml-5">
                            <span className="text-tertiary">{user[key]}</span>
                        </h1>
                    ))}
                </div>
                <div className="h-[400px]">
                    <lottie-player src="https://lottie.host/b4535c18-ca83-4ba3-b9e0-906c42ed38d0/KBksRnSFIJ.json" background="#0A1828" loop speed="1" autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact;