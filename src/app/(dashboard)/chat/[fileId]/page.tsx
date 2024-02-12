"use client"
import { useEffect } from "react";
import MainScreen from "../_components/mainscreen";
import Navbar from "../_components/navbar";
import { trpc } from "@/app/_trpc/client";
const Interaction = ({ params }: any) => {
    const {
        data: File,
        isLoading: fileLoading,
        refetch: refetchFolder,
    } = trpc.chat.getFileSummary.useQuery({
        fileId: params.fileId
    })
    useEffect(() => {
        refetchFolder()
    }, [File])
    console.log(File)

    return (<div className="h-screen overflow-hidden max-w-7xl mx-auto">
        {fileLoading ? (<h1>Loading...</h1>) : (<><Navbar />
            <MainScreen url={File.url} detailedSummary={File.summary} /></>)}
    </div>);

}

export default Interaction;