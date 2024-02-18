import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { UserCircle2, CpuIcon } from "lucide-react";

import { format } from 'date-fns';

interface MessageProps {
    message: any;
    isNextMessageSamePerson: boolean;
}

const Conversation = forwardRef<HTMLDivElement, MessageProps>(
    ({ message, isNextMessageSamePerson }, ref) => {

        return (
            <div className={cn("flex items-end")}>
                <div className={cn("w-full text-base")}>
                    <div
                        className={cn(
                            "px-4 py-6 w-full flex flex-row-reverse gap-1 relative border-t border-gray-200",
                            {
                                "bg-gray-100 text-black  pb-1": message?.isUserMessage,
                                "bg-white text-gray-900": !message?.isUserMessage,
                            },
                        )}
                    >
                        <div
                            ref={ref}
                            className={cn(
                                "relative flex h-6 w-6 aspect-square items-center justify-center mr-2",
                                {
                                    "order-2 rounded-full": message?.isUserMessage,
                                    "order-1 rounded-full": !message?.isUserMessage,
                                    invisible: isNextMessageSamePerson,
                                },
                            )}
                        >
                            {message?.isUserMessage ? (
                                <span className="bg-blue-300 flex items-center justify-center p-2 rounded-full w-[25px] h-[25px] md:mx-auto">
                                    <UserCircle2 className="text-[12px]"/>
                                </span>
                            ) : (
                                <span className="bg-green-300 flex items-center justify-center rounded-full w-[25px] h-[25px] md:mx-auto overflow-hidden">
                                    {/* <img src="/kirak-brain.jpeg" alt="Short Logo" /> */}
                                    <CpuIcon/>
                                </span>
                            )}
                        </div>
                        <div
                            className={cn(
                                'flex flex-col space-y-2 text-base max-w-md mx-2',
                                {
                                    'order-1 items-end': message?.isUserMessage,
                                    'order-2 items-start': !message?.isUserMessage,
                                }
                            )}
                        >
                            <div
                                className={cn(
                                    'px-4 py-2 rounded-lg inline-block',
                                    {
                                        'bg-blue-600 text-white':
                                            message?.isUserMessage,
                                        'bg-gray-200 text-gray-900':
                                            !message?.isUserMessage,
                                        'rounded-br-none':
                                            !isNextMessageSamePerson &&
                                            message?.isUserMessage,
                                        'rounded-bl-none':
                                            !isNextMessageSamePerson &&
                                            !message?.isUserMessage,
                                    }
                                )}
                            >
                                {typeof message?.text === 'string' ? (
                                    <div
                                        className={cn('prose', {
                                            'text-zinc-50': message?.isUserMessage,
                                        })}
                                    >
                                        {message?.text}
                                    </div>
                                ) : (
                                    message?.text
                                )}
                                {message?.id !== 'loading-message' ? (
                                    <div
                                        className={cn(
                                            'text-xs select-none mt-2 w-full text-right',
                                            {
                                                'text-zinc-500': !message?.isUserMessage,
                                                'text-blue-300': message?.isUserMessage,
                                            }
                                        )}
                                    >
                                        {/* {format(
                                            new Date(message?.createdAt),
                                            'HH:mm'
                                        )} */}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);

Conversation.displayName = "Conversation";

export default Conversation;
