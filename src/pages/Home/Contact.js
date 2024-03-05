import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const user = {
        name: "C Prithviraj",
        email: "cprithvi.raj2000@gmail.com"
    }
    return (
        <div>
            <SectionTitle title="Say Hello" />

            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-white">{`{`}</p>
                    {Object.keys(user).map((key) => (
                        <h1 className="ml-5">
                            <span className="text-tertiary">{key} : {user[key]}</span>
                        </h1>
                    ))}
                    <p className="text-white">{`}`}</p>
                </div>
                <div className="h-[500px]">
                <lottie-player src="https://lottie.host/d5475bdf-2850-4361-9d03-a9c767e446b1/QXMzOxW7f8.json" background="#0A1828" loop speed="1" autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact;