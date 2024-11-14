import React from 'react';
import {Editor} from "@/components/editor/Editor";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile} from "@clerk/nextjs";

function Page() {
    return (
        <div>
            <Header>
                <SignedOut><SignInButton/></SignedOut>
                <SignedIn><UserButton/></SignedIn>
            </Header>
            <Editor/>
        </div>
    );
}

export default Page;