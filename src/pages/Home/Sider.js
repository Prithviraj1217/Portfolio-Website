import React from "react";

function Sider() {
    return (
        <div className="fixed left-0 bottom-0 px-10 sm:static">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <i class="ri-mail-line text-gray-400 text-xl"></i>
                    <a className='Icon-Tags' href="https://www.linkedin.com/in/prithvi-raj-393434203/">
                    <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
                    </a>
                    <a className='Icon-Tags' href="https://github.com/Prithviraj1217?tab=repositories">
                    <i class="ri-github-fill text-gray-400 text-xl"></i>
                    </a>
                </div>
                <div className="w-[1px] h-32 bg-secondary opacity-50 sm:hidden"></div>
            </div>
        </div>
    )
}

export default Sider