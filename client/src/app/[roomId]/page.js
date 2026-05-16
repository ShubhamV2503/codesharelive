"use client";

import { use } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the Editor component because Monaco requires browser APIs
const CodeEditorComponent = dynamic(() => import('../../components/Editor'), { ssr: false });

export default function RoomPage({ params }) {
    const unwrappedParams = use(params);

    return <CodeEditorComponent roomId={unwrappedParams.roomId} />;
}
