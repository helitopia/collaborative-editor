import React from 'react';
import {SignUp} from "@clerk/nextjs";


function Page() {
    return (
        <div className={"auth-page"}>
            <SignUp/>
        </div>
    );
}

export default Page;