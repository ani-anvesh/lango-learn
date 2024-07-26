import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { links } from "@/config";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600 px-2">Lingo</h1>
        </Link>

        <div className="flex gap-x-3">
          {false && <Loader className="h-5 w-5 animate-spin text-muted-foreground" />}{" "}
          {false && (
            <Button size="lg" variant="ghost">
              Login
            </Button>
          )}
          <Link href={links.sourceCode} target="_blank">
            <Image src="/github.svg" alt="Source Code" height={20} width={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};
