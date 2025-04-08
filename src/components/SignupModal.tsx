
import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-pandr-darkGray border border-pandr-violet/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Get Started with Pandr</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-pandr-lavender">Name</label>
            <Input id="name" placeholder="Your name" className="bg-pandr-mediumGray/50 border-pandr-violet/30 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-pandr-lavender">Email</label>
            <Input id="email" type="email" placeholder="your@email.com" className="bg-pandr-mediumGray/50 border-pandr-violet/30 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-pandr-lavender">Password</label>
            <Input id="password" type="password" placeholder="••••••••" className="bg-pandr-mediumGray/50 border-pandr-violet/30 text-white" />
          </div>
          <Button className="w-full bg-gradient-to-r from-pandr-ultraviolet to-pandr-accent hover:shadow-glow text-white mt-4">
            Create Account
          </Button>
          <p className="text-xs text-gray-400 text-center mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
