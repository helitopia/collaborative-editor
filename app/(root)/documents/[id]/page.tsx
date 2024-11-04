import React from 'react';
import {Editor} from "@/components/editor/Editor";
import Header from "@/components/Header";

function Page() {
    return (
        <div>
            <Header>
                <p>Fake title</p>
            </Header>
            <Editor/>
        </div>
    );
}

export default Page;