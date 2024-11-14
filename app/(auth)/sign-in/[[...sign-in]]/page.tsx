import {SignIn} from "@clerk/nextjs";


function Page() {
    return (
        <div className={"auth-page"}>
            <SignIn/>
        </div>
    );
}

export default Page;