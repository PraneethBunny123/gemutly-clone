import Link from "next/link";
import { Button } from "./ui/button";
import { Bell, Heart, ShoppingCart, SunMoon, Globe } from "lucide-react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-background/80 border-b border-border shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex items-center py-2 px-2 md:px-6">
        
        {/* Left (Logo) */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            Gemutly Clone
          </Link>
        </div>

        {/* Right (Icons + Login) */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/checkout">
            <Button size="icon" variant="ghost" aria-label="Cart">
              <ShoppingCart className="size-4" />
            </Button>
          </Link>

          <Link href="/favorites">
            <Button size="icon" variant="ghost" aria-label="Favorites">
              <Heart className="size-4" />
            </Button>
          </Link>

          <Button size="icon" variant="ghost" aria-label="Toggle Theme">
            <SunMoon className="size-4" />
          </Button>

          <Button size="icon" variant="ghost" aria-label="Switch Language">
            <Globe className="size-4" />
          </Button>

          <Link href="/notifications">
            <Button size="icon" variant="ghost" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
          </Link>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button>Login</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
          
        </div>
      </div>
    </nav>
  );
}
