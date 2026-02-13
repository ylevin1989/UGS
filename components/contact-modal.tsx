"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ClientForm } from "@/components/forms/client-form";
import { CreatorForm } from "@/components/forms/creator-form";
import { useState } from "react";

interface ContactModalProps {
    type: "client" | "creator";
    trigger?: React.ReactNode;
}

export function ContactModal({ type, trigger }: ContactModalProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button size="lg" className="rounded-full px-8 h-12 font-bold shadow-xl">
                        {type === "client" ? "Запустить рекламу" : "Стать креатором"}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className="glass p-8 md:p-12 rounded-[3rem] border-white/10 shadow-2xl relative">
                    <DialogHeader className="mb-8">
                        <DialogTitle className="text-4xl font-black tracking-tighter uppercase text-center">
                            {type === "client" ? (
                                <>Отравить <span className="text-primary italic">БРИФ</span></>
                            ) : (
                                <>Стать <span className="text-primary italic">КРЕАТОРОМ</span></>
                            )}
                        </DialogTitle>
                    </DialogHeader>

                    {type === "client" ? (
                        <ClientForm onSuccess={() => setOpen(false)} />
                    ) : (
                        <CreatorForm onSuccess={() => setOpen(false)} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
