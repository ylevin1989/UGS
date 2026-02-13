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
                <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 rounded-[3rem] pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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
